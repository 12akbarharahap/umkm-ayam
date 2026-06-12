import React from 'react';
import { Truck, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import TornEdgeDivider from './TornEdgeDivider';

const Logistik = () => {
  return (
    <section id="logistik" className="bg-primary-base text-white py-20 px-4 sm:px-6 lg:px-8 relative mt-16 md:mt-24">
      {/* Torn Edge Transition */}
      <div className="absolute top-0 left-0 w-full -translate-y-[98%] text-primary-base z-20">
        <TornEdgeDivider />
      </div>



      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">Pengiriman Handal & Tepat Waktu</h2>
          <p className="text-text-dark max-w-2xl mx-auto text-lg">
            Kualitas produk percuma tanpa logistik yang baik. Kami menjamin produk sampai ke tangan Anda dalam kondisi sempurna.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 overflow-hidden">
          {/* Armada Ayam */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-border-dark rounded-2xl p-8 hover:bg-white/10 transition-colors"
          >
            <div className="w-16 h-16 bg-accent-main/20 rounded-2xl flex items-center justify-center mb-6 text-accent-main">
              <Truck size={32} />
            </div>
            <h3 className="font-display font-bold text-2xl mb-3">Armada Ayam Potong</h3>
            <p className="text-text-dark-dim text-base mb-6 leading-relaxed">
              Menggunakan thermovan berpendingin khusus yang menjaga suhu tetap di angka 0–4°C. Cold chain tidak terputus dari RPA hingga dapur Anda.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-text-dark font-medium">
                <span className="text-accent-main">✔</span> Kapasitas besar
              </li>
              <li className="flex items-center gap-2 text-sm text-text-dark font-medium">
                <span className="text-accent-main">✔</span> Higienis & steril
              </li>
            </ul>
          </motion.div>

          {/* Armada Telur */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-border-dark rounded-2xl p-8 hover:bg-white/10 transition-colors"
          >
            <div className="w-16 h-16 bg-accent-main/20 rounded-2xl flex items-center justify-center mb-6 text-accent-main">
              <Truck size={32} />
            </div>
            <h3 className="font-display font-bold text-2xl mb-3">Armada Telur Fresh</h3>
            <p className="text-text-dark-dim text-base mb-6 leading-relaxed">
              Dilengkapi kendaraan khusus tray dengan material foam shock-absorber untuk meminimalisir guncangan jalan dan keretakan telur.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-text-dark font-medium">
                <span className="text-accent-main">✔</span> Anti guncangan ekstrim
              </li>
              <li className="flex items-center gap-2 text-sm text-text-dark font-medium">
                <span className="text-accent-main">✔</span> Aman dari terik matahari
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Coverage Area */}
        <div className="bg-black/20 rounded-2xl p-8 border border-border-dark">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-white/10 p-4 rounded-full text-white">
              <MapPin size={32} />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-body font-bold text-lg mb-2">Area Layanan Pengiriman (Gratis Ongkir S&K)</h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-text-dark">Banda Aceh</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-text-dark">Aceh Besar</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-text-dark">Sigli</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-text-dark">Bireuen</span>
                <span className="px-3 py-1 border border-white/20 rounded-full text-xs font-medium text-text-dark-dim">+ Kota lainnya via bus antarkota</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logistik;
