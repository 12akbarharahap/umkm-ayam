import React from 'react';
import { Store, Utensils, ChefHat, Factory, ShoppingCart, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const SegmenKlien = () => {
  return (
    <section className="bg-surface-dim py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-main mb-4">
            Mitra Bisnis yang Kami Layani
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Kami memahami kebutuhan unik setiap jenis usaha Anda. Kapasitas produksi kami siap mendukung berbagai skala bisnis.
          </p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={{
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            hidden: { opacity: 0 }
          }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          <KlienCard 
            icon={<Utensils size={36} />}
            title="Restoran & Warung Makan"
            desc="Kebutuhan ayam karkas dan fillet segar setiap hari."
          />
          <KlienCard 
            icon={<ChefHat size={36} />}
            title="Toko Kue & Bakery"
            desc="Suplai telur fresh grade khusus untuk adonan kue."
          />
          <KlienCard 
            icon={<Factory size={36} />}
            title="Pabrik Frozen Food"
            desc="Daging fillet boneless partai besar."
          />
          <KlienCard 
            icon={<ShoppingCart size={36} />}
            title="Minimarket & Supermarket"
            desc="Telur kemasan mika rapi dan siap pajang."
          />
          <KlienCard 
            icon={<Store size={36} />}
            title="Agen Sembako"
            desc="Grosir telur per peti dengan harga kompetitif."
          />
          <KlienCard 
            icon={<Users size={36} />}
            title="Katering & Hajatan"
            desc="Pesanan ayam parting custom sesuai porsi box."
          />
        </motion.div>
      </div>
    </section>
  );
};

const KlienCard = ({ icon, title, desc }) => (
  <motion.div 
    variants={{
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 }
    }}
    className="bg-white p-6 rounded-2xl border border-border text-center hover:shadow-lg transition-shadow group"
  >
    <div className="w-16 h-16 mx-auto bg-surface-dim rounded-full flex items-center justify-center text-text-secondary group-hover:text-primary-base transition-colors mb-4">
      {icon}
    </div>
    <h3 className="font-body font-bold text-lg text-text-main mb-2">{title}</h3>
    <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
  </motion.div>
);

export default SegmenKlien;
