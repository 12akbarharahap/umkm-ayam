import React from 'react';
import { MessageCircle } from 'lucide-react';

const Kontak = () => {
  const adminAyamWa = "62875142233870";
  const adminTelurWa = "62875142233870";
  const waUtama = "62875142233870";
  
  const textAyam = encodeURIComponent("Halo Admin, saya ingin pesan ayam potong untuk usaha saya.");
  const textTelur = encodeURIComponent("Halo Admin, saya butuh pasokan telur fresh.");
  const textUtama = encodeURIComponent("Halo Kandang Makmur Sejahtera, saya ingin bertanya tentang layanan/produk.");

  return (
    <section id="kontak" className="bg-surface py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-text-main mb-4">
          Pusat Layanan Pemesanan
        </h2>
        <p className="text-text-secondary mb-12 text-lg">
          Untuk respon yang lebih cepat, silakan hubungi admin sesuai dengan produk yang Anda butuhkan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Kontak Ayam */}
          <div className="bg-surface-dim p-8 rounded-2xl border border-border flex flex-col items-center">
            <h3 className="font-display font-bold text-2xl text-accent-main mb-2">Layanan Ayam Potong</h3>
            <p className="text-sm text-text-secondary mb-6">Tanya harga karkas, fillet, dan parting hari ini.</p>
            <a 
              href={`https://wa.me/${adminAyamWa}?text=${textAyam}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-accent-main hover:brightness-90 text-white font-bold py-4 rounded-xl flex justify-center items-center gap-2 transition-colors"
            >
              <MessageCircle size={24} />
              Chat Admin Ayam
            </a>
          </div>

          {/* Kontak Telur */}
          <div className="bg-surface-dim p-8 rounded-2xl border border-border flex flex-col items-center">
            <h3 className="font-display font-bold text-2xl text-accent-main mb-2">Layanan Telur Fresh</h3>
            <p className="text-sm text-text-secondary mb-6">Info harga grosir per peti dan ketersediaan stok.</p>
            <a 
              href={`https://wa.me/${adminTelurWa}?text=${textTelur}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-surface-alt hover:bg-white text-text-main font-bold py-4 rounded-xl flex justify-center items-center gap-2 transition-colors border border-border"
            >
              <MessageCircle size={24} />
              Chat Admin Telur
            </a>
          </div>
        </div>

        {/* Fallback WA */}
        <div className="pt-6 border-t border-border">
          <p className="text-sm text-text-dim mb-4">Atau butuh konsultasi untuk kedua produk?</p>
          <a 
            href={`https://wa.me/${waUtama}?text=${textUtama}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#25D366] font-bold hover:text-green-700 transition-colors"
          >
            <MessageCircle size={20} />
            Hubungi WhatsApp Utama
          </a>
        </div>
      </div>
    </section>
  );
};

export default Kontak;
