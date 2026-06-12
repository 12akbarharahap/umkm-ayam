---
name: landing-page-umkm-ayam
description: >
  Gunakan skill ini setiap kali membuat atau merancang landing page untuk usaha
  peternakan ayam, khususnya UMKM yang menjual ayam potong (broiler) dan/atau
  ayam petelur (telur segar). Mencakup sistem warna, psikologi UX, struktur
  halaman, navigasi dual-segmen, dan pola komponen yang sudah terbukti efektif
  untuk pasar lokal Indonesia.
bahasa: Indonesia
---

# Sistem Desain Landing Page UMKM — Ayam Potong & Ayam Petelur

## Prinsip Utama

Landing page UMKM peternakan ayam punya satu pekerjaan: **mengubah pengunjung menjadi pembeli dalam waktu kurang dari 10 detik**. Pengunjung datang dengan niat spesifik — mereka butuh ayam, atau butuh telur. Tugas halaman adalah langsung menjawab niat itu, bukan memaksa mereka membaca dulu.

Pendekatan desain harus **lokal dan hangat**, bukan dingin dan korporat. Calon pembeli (pemilik warung, ibu rumah tangga, katering, agen grosir) perlu merasa bahwa mereka sedang berbicara dengan peternak yang bisa dipercaya — bukan perusahaan multinasional.

Tiga pertanyaan yang harus dijawab halaman ini dalam 10 detik pertama:
1. "Ini jual apa?" → Ayam potong segar dan/atau telur fresh
2. "Bisa dipercaya tidak?" → Bukti: pengalaman, halal, testimoni
3. "Bagaimana cara pesan?" → Tombol WhatsApp yang jelas dan mudah ditemukan

---

## Sistem Warna: Psikologi & Konsistensi

### Aturan 60-30-10 (Wajib Dipatuhi)

Setiap halaman harus mengikuti rasio ini agar tidak terasa ramai atau hambar:

- **60% — Warna Dominan (Base):** Latar besar, hero, footer. Harus netral atau saturasi rendah. Jangan gunakan warna jenuh di sini.
- **30% — Warna Pendukung (Secondary):** Latar section, kartu produk, navbar. Mendukung dominan tanpa bersaing.
- **10% — Warna Aksen:** Tombol CTA, label harga, badge, highlight. Satu-satunya tempat warna jenuh boleh hidup. Maksimal satu warna aksen utama.

Jika ada 3+ warna jenuh bertebaran bebas di halaman — berhenti. Pilih satu jadi aksen, sisanya desaturasi 60–80% menjadi tint.

### Palet Resmi untuk Usaha Ayam

Palet ini dirancang khusus berdasarkan psikologi warna untuk bisnis pangan lokal Indonesia:

```
--warna-dasar:          #0d1f0a   /* Hijau hutan tua — hero, footer, navbar */
--warna-permukaan:      #ffffff   /* Putih bersih — section produk utama */
--warna-permukaan-alt:  #fffdf6   /* Putih krem hangat — section telur */
--warna-permukaan-redup:#f5f5f5   /* Abu netral — section testimoni, klien */
--warna-aksen-ayam:     #c0392b   /* Merah tua — CTA ayam, urgency, aksi */
--warna-aksen-telur:    #e8c84a   /* Amber/emas — CTA telur, kehangatan */
--warna-tint-ayam:      #fdf4f3   /* Tint 6% merah — latar keunggulan ayam */
--warna-tint-telur:     #fffbee   /* Tint 6% amber — latar keunggulan telur */
--warna-teks-utama:     #1a1a1a   /* Teks body — bukan hitam murni */
--warna-teks-sekunder:  #666666   /* Deskripsi, subjudul */
--warna-teks-redup:     #aaaaaa   /* Label kecil, unit harga */
--warna-teks-gelap:     rgba(255,255,255,0.85)  /* Teks di atas background gelap */
--warna-teks-redup-gelap: rgba(255,255,255,0.55) /* Sub-teks di background gelap */
--warna-border:         #e8e8e8   /* Garis pemisah section terang */
--warna-border-gelap:   rgba(255,255,255,0.12)  /* Garis di section gelap */
```

**Mengapa `#0d1f0a` bukan hitam biasa?**
Hijau hutan tua adalah warna dunia nyata peternakan — dedaunan, kandang, alam. Dibanding charcoal atau navy generik, warna ini membuat aksen merah dan emas terasa lebih hangat dan lebih Indonesia. Itu satu keputusan berani yang membuat seluruh palet terasa disengaja, bukan sekadar dipilih.

### Psikologi Warna per Jenis Usaha

| Jenis Usaha | Warna Aksen Tepat | Alasan Psikologis | Hindari |
|---|---|---|---|
| Ayam potong / daging segar | Merah tua `#c0392b` | Merangsang nafsu makan, urgency, keberanian bertindak | Biru dingin (mematikan nafsu makan) |
| Telur / produk unggas segar | Amber/emas `#e8a020` | Kehangatan, kealamian, kesan pagi segar | Kuning neon (kesan murahan) |
| Sayur / herbal / organik | Hijau hutan `#2d6a1f` | Aman, alami, sehat | Hijau limau (terasa sintetis) |
| UMKM lokal (pasar Indonesia) | Merah hangat, hijau gelap, atau emas | Familiar, terpercaya, membangkitkan selera | Putih steril tanpa aksen hangat |

### Strategi Palet Dual-Segmen

Ketika satu halaman melayani dua jenis pembeli berbeda (pembeli ayam potong ≠ pembeli telur), berikan masing-masing aksen warna tersendiri — tapi dari **keluarga temperatur yang sama** agar tetap terasa bersaudara, bukan bertabrakan:

- Pasangkan **merah hangat** (tegas, daging, aksi cepat) dengan **amber/emas hangat** (lembut, organik, alami). Keduanya warm tone — kohesif.
- Gunakan **warna dasar gelap** yang sama (`#0d1f0a`) sebagai pengikat di hero, footer, dan navbar. Ini yang membuat dua divisi terasa satu merek.
- **Jangan** memasangkan aksen warm dengan aksen cool (contoh: merah + biru teal) untuk dua segmen dalam satu halaman — register emosional bertabrakan dan pengguna merasakannya meski tidak bisa menyebutnya.

### Ritme Section: Gelap–Terang Bergantian

Halaman yang semuanya putih terasa tidak ada ujungnya. Bergantikan suhu latar antar-section untuk menciptakan napas visual dan memberi sinyal bahwa pengguna sudah berpindah topik:

```
Hero              → Sangat gelap (#0d1f0a)    — otoritas, drama, kesan profesional
Papan Harga       → Gelap pekat (#1a1a1a)     — menjaga momentum, kesan aktif
Produk Ayam       → Putih bersih (#ffffff)    — fokus produk, bersih
Keunggulan Ayam   → Tint merah lembut         — hangat, tidak mengganggu
Produk Telur      → Krem hangat (#fffdf6)     — berbeda dari section ayam
Keunggulan Telur  → Tint amber lembut         — mencerminkan struktur section ayam
Logistik          → Gelap lagi (#0d1f0a)      — otoritas, kepercayaan operasional
Testimoni         → Abu netral (#f9f9f9)      — manusiawi, bisa dipercaya
Kontak/CTA        → Putih + kartu aksen       — bersih, fokus pada aksi
Footer            → Sangat gelap              — menutup halaman, simetri dengan hero
```

Pola gelap–terang–gelap ini mencegah kelelahan scroll dan membantu pengguna secara tidak sadar tahu di mana mereka berada di halaman.

### Aturan Kontras untuk Keterbacaan

- Teks body di atas putih: minimum `#555555` — jangan `#000000` murni (terlalu keras, terasa agresif)
- Teks di atas background gelap: minimum `rgba(255,255,255,0.75)` — jangan putih murni di atas hitam pekat (terlalu silau)
- Teks tombol CTA: gunakan warna paling gelap dari keluarga hue yang sama dengan tombol — bukan hitam polos
- Harga/highlight di kartu berwarna: gunakan stop gelap (800) dari ramp warna yang sama
- Jangan teks merah di atas hijau atau sebaliknya — jebakan buta warna

---

## Struktur Halaman: Urutan Komponen yang Terbukti Efektif

### 1. Navbar Sticky
Selalu sticky di atas. Berisi logo/nama usaha + link anchor ke seksi utama (Ayam Potong, Telur Fresh, Pengiriman, Kontak). Di mobile, sembunyikan link navbar — tampilkan hanya logo dan mungkin satu tombol WhatsApp darurat.

### 2. Hero Section — Split Screen Dual Navigasi
Ini komponen paling kritis. Pembeli ayam dan pembeli telur adalah dua orang berbeda dengan kebutuhan berbeda. Jangan paksa mereka scroll dulu untuk menemukan bagian mereka.

**Struktur wajib hero:**
```
[Eyebrow kecil: "Supplier Tangan Pertama · Aceh · Sejak 20XX"]
[H1 besar: Suplier Ayam Broiler & Telur Fresh — Solusi Stok Stabil]
[Subheadline: siapa yang dilayani, keunggulan utama, satu kalimat]
[Dua tombol besar berdampingan:]
  🥩 [Merah]  "Butuh Pasokan Ayam Potong →"  (anchor scroll ke #ayam)
  🥚 [Amber]  "Butuh Pasokan Telur Fresh →"  (anchor scroll ke #telur)
[Trust bar kecil: 500+ mitra · Halal MUI · Cold Chain · Harga Stabil]
```

Di mobile, dua tombol disusun vertikal (stack), bukan horizontal.

### 3. Papan Harga Harian (Fitur Kunci)
Letakkan tepat di bawah hero, di background gelap pekat. Ini fitur pembeda yang sangat dihargai pembeli B2B — mereka tidak perlu telepon dulu untuk tahu harga hari ini.

- Tampilkan 4–6 item harga paling sering ditanyakan
- Buat field harga bisa diedit langsung (`contenteditable="true"`) — klien bisa update dari HP setiap pagi tanpa perlu login ke CMS
- Tampilkan hari dan tanggal otomatis via JavaScript
- Tambahkan indikator "live" (titik hijau berkedip) agar terasa aktif dan terpercaya

### 4. Blok Produk Divisi Ayam Potong
Background putih bersih. Mulai dengan badge divisi merah sebagai pemisah visual yang jelas.

Katalog kartu produk (grid 2 kolom di mobile, 4 kolom di desktop):
- Ayam Karkas Utuh (0,8 kg / 1 kg / 1,2 kg)
- Ayam Potong Parting (potongan 4, 8, atau 10)
- Fillet Dada Boneless
- Fillet Paha Boneless

Setiap kartu berisi: visual/emoji produk, nama, deskripsi singkat 2 baris, harga dengan warna aksen merah.

### 5. Keunggulan Divisi Ayam
Background tint merah sangat lembut (`#fdf4f3`). Grid 2×2 atau 2×3 kartu spesifikasi:
- Bersertifikat Halal MUI
- Cold Chain terjaga (0–4°C)
- Daging tebal & yield tinggi
- Pakan berkualitas, bebas hormon tambahan

### 6. Blok Produk Divisi Telur Fresh
Background krem hangat (`#fffdf6`) — berbeda dari section ayam agar pembeli telur langsung merasa "ini bagian saya". Mulai dengan badge divisi amber.

Katalog kartu produk:
- Telur Tray Karton (isi 30 butir) — untuk restoran, kafe
- Telur Curah Grosir (per 30 kg) — untuk agen pasar
- Telur Kemasan Mika Ritel — untuk minimarket
- Paket Kontrak Bakery/Toko Kue

### 7. Keunggulan Divisi Telur
Background tint amber sangat lembut (`#fffbee`). Grid spesifikasi:
- Dipanen setiap pagi, dikirim hari itu
- Cangkang tebal & cokelat pekat (tanda telur sehat)
- Tanpa bahan pengawet
- Ukuran seragam, disortir per grade (S/M/L)

### 8. Logistik & Armada Pengiriman
Background gelap (`#0d1f0a`). Ini section yang sering dilupakan tapi sangat penting untuk pembeli B2B — mereka ingin tahu *bagaimana* produk sampai ke tangan mereka dalam kondisi baik.

**Dua kartu logistik berdampingan:**
- 🚛 Armada Ayam: Thermovan berpendingin, suhu 0–4°C, cold chain tidak putus
- 🚐 Armada Telur: Kendaraan khusus tray, foam shock-absorber, minim keretakan

Di bawahnya: chip-chip area layanan pengiriman.

### 9. Segmen Klien yang Dilayani
Background abu netral. Grid 6 kartu ikon: Restoran & Warung, Hotel & Katering, Pabrik Frozen Food, Toko Kue & Bakery, Minimarket/Supermarket, Agen Sembako. Ini membantu pembeli mengidentifikasi dirinya dan merasa "ini memang untuk saya."

### 10. Testimoni
Background abu netral atau warm off-white. 2–3 kartu testimoni dari profil pembeli berbeda (pemilik warung, agen grosir, pemilik katering). Setiap kartu: bintang 5, kutipan, nama, peran/lokasi.

### 11. Kontak Dual WhatsApp
Section kritis terakhir sebelum footer. Dua kartu berdampingan:
- Kartu merah lembut: Admin Divisi Ayam Potong + tombol WA merah
- Kartu amber lembut: Admin Divisi Telur Fresh + tombol WA kuning

Di bawah dua kartu: satu tombol hijau WhatsApp Utama sebagai fallback untuk yang belum yakin ke divisi mana.

### 12. Footer
Background gelap, simetri dengan hero. Nama usaha, alamat, jam operasional, copyright.

---

## Komponen Interaktif Wajib

### Papan Harga Editable
```html
<span contenteditable="true" title="Sentuh untuk mengubah harga">
  Rp 32.000
</span>
```
Simpan perubahan ke `localStorage` agar harga tidak hilang saat halaman di-refresh:
```javascript
document.querySelectorAll('[contenteditable]').forEach(el => {
  const key = 'harga_' + el.dataset.id;
  if (localStorage.getItem(key)) el.textContent = localStorage.getItem(key);
  el.addEventListener('blur', () => localStorage.setItem(key, el.textContent));
});
```

### Tanggal Otomatis Indonesia
```javascript
const hari = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
const bulan = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
const d = new Date();
document.getElementById('tgl').textContent =
  hari[d.getDay()] + ', ' + d.getDate() + ' ' + bulan[d.getMonth()] + ' ' + d.getFullYear();
```

### Tombol WhatsApp dengan Pesan Otomatis
```html
<a href="https://wa.me/628XXXXXXXXXX?text=Halo%2C%20saya%20ingin%20pesan%20ayam%20potong">
  💬 Chat Admin Ayam Potong
</a>
```
Selalu encode pesan default agar pembeli tidak perlu mengetik dari awal — ini meningkatkan konversi secara signifikan.

### Anchor Scroll dari Hero ke Divisi
```html
<!-- Tombol hero -->
<a href="#ayam">Butuh Pasokan Ayam Potong →</a>
<a href="#telur">Butuh Pasokan Telur Fresh →</a>

<!-- Target section -->
<section id="ayam">...</section>
<section id="telur">...</section>
```
Tambahkan `scroll-behavior: smooth` pada `html` agar transisinya mulus.

---

## Tipografi

Pasangkan dua jenis huruf dengan kepribadian berbeda:

- **Display (judul besar, harga):** `Playfair Display` — berkarakter, terasa premium dan hangat, cocok untuk brand lokal yang ingin terlihat terpercaya tanpa terasa korporat
- **Body (teks biasa, deskripsi):** `Inter` — bersih, sangat mudah dibaca di layar HP ukuran kecil sekalipun

Skala tipografi:
```
H1 hero:     clamp(1.8rem, 4vw, 3rem) — Playfair Display, weight 900
H2 section:  clamp(1.5rem, 3vw, 2.2rem) — Playfair Display, weight 800
H3 kartu:    14px — Inter, weight 600
Body:        14–15px — Inter, weight 400, line-height 1.7
Harga:       1.05–1.1rem — Playfair Display, weight 700
Label kecil: 11–12px — Inter, weight 500–600, letter-spacing 0.05–0.12em
Eyebrow:     11px — Inter, weight 600, ALL CAPS, letter-spacing 0.12em
```

---

## Checklist Responsif Mobile

Lebih dari 70% calon pembeli UMKM mengakses via HP Android, bukan laptop. Wajib dicek:

- [ ] Hero: dua tombol CTA tersusun vertikal (stack), bukan horizontal
- [ ] Grid produk: 2 kolom di mobile, 4 kolom di desktop
- [ ] Grid logistik: 1 kolom di mobile, 2 kolom di desktop
- [ ] Grid kontak: 1 kolom di mobile, 2 kolom di desktop
- [ ] Papan harga: 2 kolom di mobile
- [ ] Navbar: sembunyikan link teks di mobile, tampilkan hanya logo
- [ ] Semua tombol WA mudah dijangkau jempol (min. tinggi 44px)
- [ ] Font tidak lebih kecil dari 12px di mana pun
- [ ] Tidak ada horizontal scroll

Gunakan breakpoint tunggal `@media(max-width: 680px)` — cukup untuk halaman landing sederhana.

---

## Kesalahan Umum yang Harus Dihindari

| Kesalahan | Akibat | Solusi |
|---|---|---|
| Tidak ada pemisahan jalur di hero | Pembeli bingung, langsung pergi | Dua tombol CTA besar di hero |
| Harga tidak ditampilkan | Pembeli malas tanya, cari supplier lain | Papan harga editable di atas fold |
| Satu nomor WA untuk semua | Respons lambat, pesan terlewat | Dua nomor per divisi + satu nomor utama |
| Background section semua putih | Halaman terasa monoton, tidak ada ritme | Terapkan pola gelap–terang bergantian |
| Warna aksen terlalu banyak | Terasa ramai, tidak profesional | Maksimal dua aksen, satu keluarga temperatur |
| Tidak ada bukti sosial | Pembeli tidak percaya | Testimoni + angka (tahun berdiri, jumlah mitra) |
| Tombol WA tidak ada pesan default | Pembeli malas mulai chat | Selalu sertakan `?text=` di link WA |
| Tidak mobile-first | 70%+ pengguna pakai HP | Selalu test di viewport 390px |
