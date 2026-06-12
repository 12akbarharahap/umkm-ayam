import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import chokidar from 'chokidar';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Konfigurasi Folder
const INPUT_DIR = path.resolve(__dirname, '../src/assets/raw-images');
const OUTPUT_DIR = path.resolve(__dirname, '../public/images');

// Pastikan folder output ada
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

console.log(`[Optimizer] Memantau folder: ${INPUT_DIR}`);

// Fungsi untuk mengoptimasi gambar
const optimizeImage = async (filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  
  // Hanya proses JPG dan PNG
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

  const fileName = path.basename(filePath, ext);
  const webpOutput = path.join(OUTPUT_DIR, `${fileName}.webp`);
  const avifOutput = path.join(OUTPUT_DIR, `${fileName}.avif`);

  try {
    const image = sharp(filePath);
    
    // Konversi ke WebP
    await image
      .webp({ quality: 80, effort: 6 })
      .toFile(webpOutput);
    console.log(`✅ Sukses: ${fileName}.webp`);

    // Konversi ke AVIF (Ukuran lebih kecil, kualitas sama dengan WebP)
    await image
      .avif({ quality: 75, effort: 4 })
      .toFile(avifOutput);
    console.log(`✅ Sukses: ${fileName}.avif`);

    // Salin file asli sebagai fallback (untuk tag <img>)
    const originalOutput = path.join(OUTPUT_DIR, path.basename(filePath));
    fs.copyFileSync(filePath, originalOutput);
    console.log(`✅ Sukses: ${path.basename(filePath)} (Fallback)`);

  } catch (error) {
    console.error(`❌ Gagal memproses ${fileName}:`, error.message);
  }
};

// Setup Watcher dengan chokidar
const watcher = chokidar.watch(INPUT_DIR, {
  persistent: true,
  ignoreInitial: false, // Proses file yang sudah ada saat skrip dijalankan
  awaitWriteFinish: {
    stabilityThreshold: 500,
    pollInterval: 100
  }
});

watcher
  .on('add', (filePath) => {
    console.log(`[File Baru] ${path.basename(filePath)} mendeteksi...`);
    optimizeImage(filePath);
  })
  .on('change', (filePath) => {
    console.log(`[File Diubah] ${path.basename(filePath)} mengoptimasi ulang...`);
    optimizeImage(filePath);
  });
