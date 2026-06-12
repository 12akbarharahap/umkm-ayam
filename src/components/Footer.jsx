import React from 'react';
import TornEdgeDivider from './TornEdgeDivider';

const Footer = () => {
  return (
    <footer className="bg-surface-alt text-text-main pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-border/50 relative mt-16 md:mt-24">
      {/* Torn Edge Transition */}
      <div className="absolute top-0 left-0 w-full -translate-y-[98%] text-surface-alt">
        <TornEdgeDivider />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="md:col-span-2">
          <a href="#" className="flex items-center mb-6">
            <img src="/images/logo.png" alt="Kandang Makmur Sejahtera" className="h-20 md:h-28 w-auto scale-125 md:scale-[1.4] origin-left mix-blend-multiply" />
          </a>
          <p className="text-text-secondary text-sm max-w-sm leading-relaxed mb-6">
            Supplier tangan pertama untuk kebutuhan ayam potong dan telur segar. Melayani ratusan mitra bisnis kuliner di Medan dan sekitarnya sejak 2018.
          </p>
        </div>

        <div>
          <h2 className="font-body font-bold text-lg mb-4">Layanan</h2>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li><a href="#ayam" className="hover:text-accent-main transition-colors">Ayam Potong Segar</a></li>
            <li><a href="#telur" className="hover:text-accent-main transition-colors">Telur Fresh Grosir</a></li>
            <li><a href="#logistik" className="hover:text-accent-main transition-colors">Pengiriman</a></li>
            <li><a href="#kontak" className="hover:text-accent-main transition-colors">Konsultasi Bisnis</a></li>
          </ul>
        </div>

        <div>
          <h2 className="font-body font-bold text-lg mb-4">Jam Operasional</h2>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li><span className="text-text-main font-semibold">Senin - Minggu:</span> 08:00 - 16:00 WIB</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/50 pt-8 text-center md:flex md:justify-between md:text-left text-xs text-text-secondary">
        <p>&copy; {new Date().getFullYear()} Kandang Makmur Sejahtera. All rights reserved.</p>
        <div className="mt-4 md:mt-0 space-x-4">
          <a href="#" className="hover:text-accent-main transition-colors">Syarat & Ketentuan</a>
          <a href="#" className="hover:text-accent-main transition-colors">Kebijakan Privasi</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
