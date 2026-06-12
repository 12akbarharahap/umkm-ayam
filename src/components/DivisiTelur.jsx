import React from 'react';
import { Sun, CheckCircle, Ban, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const DivisiTelur = () => {
  return (
    <section id="telur" className="scroll-mt-16">
      {/* Katalog Produk Telur */}
      <div className="bg-surface-alt py-16 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            className="mb-10"
          >
            <span className="inline-block bg-accent-main text-primary-base text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
              Katalog Produk Pilihan
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-text-main">
              Kualitas Pagi Ini
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={{
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
              hidden: { opacity: 0 }
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <ProductCard 
              emoji="🥚"
              title="Telur Tray Karton"
              desc="Isi 30 butir per tray. Ideal untuk kebutuhan harian restoran dan kafe."
            />
            <ProductCard 
              emoji="📦"
              title="Telur Curah Grosir"
              desc="Pembelian per peti/ikat (15kg). Harga khusus untuk agen dan grosir."
            />
            <ProductCard 
              emoji="🛒"
              title="Kemasan Mika Ritel"
              desc="Isi 10/15 butir. Bersih dan siap pajang untuk minimarket."
            />
            <ProductCard 
              emoji="🤝"
              title="Paket Kontrak Bakery"
              desc="Telur grade khusus (putih telur kental) untuk hasil kue maksimal."
            />
          </motion.div>
        </div>
      </div>

      {/* Keunggulan Telur */}
      <div className="bg-surface-dim py-16 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={{
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            hidden: { opacity: 0 }
          }}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <FeatureItem 
            icon={<Sun size={32} className="text-accent-main" />}
            title="Dipanen Setiap Pagi"
            desc="Langsung dikirim di hari yang sama untuk menjamin kesegaran optimal."
          />
          <FeatureItem 
            icon={<CheckCircle size={32} className="text-accent-main" />}
            title="Cangkang Tebal & Pekat"
            desc="Ciri khas telur dari ayam petelur yang sehat dengan nutrisi pakan seimbang."
          />
          <FeatureItem 
            icon={<Ban size={32} className="text-accent-main" />}
            title="Tanpa Bahan Pengawet"
            desc="Aman dikonsumsi keluarga dan mempertahankan rasa alami yang lebih gurih."
          />
          <FeatureItem 
            icon={<Layers size={32} className="text-accent-main" />}
            title="Disortir per Grade"
            desc="Ukuran seragam (S/M/L) memudahkan Anda dalam standardisasi resep masakan."
          />
        </motion.div>
      </div>
    </section>
  );
};

const ProductCard = ({ emoji, title, desc }) => (
  <motion.div 
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
    className="bg-white border border-yellow-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow"
  >
    <div className="text-4xl mb-4">{emoji}</div>
    <h3 className="font-body font-semibold text-text-main mb-2 leading-tight">{title}</h3>
    <p className="text-text-secondary text-sm mb-4 line-clamp-3">{desc}</p>
    <div className="font-display font-bold text-accent-main text-lg">Hubungi Kami</div>
  </motion.div>
);

const FeatureItem = ({ icon, title, desc }) => (
  <motion.div 
    variants={{
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 }
    }}
    className="flex gap-4 items-start"
  >
    <div className="bg-white border border-yellow-50 p-3 rounded-xl shadow-sm">
      {icon}
    </div>
    <div>
      <h3 className="font-body font-bold text-text-main mb-1">{title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

export default DivisiTelur;
