import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-primary-base text-text-main py-28 md:py-36 lg:py-40 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex flex-col justify-center min-h-[65vh] lg:min-h-[75vh]">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 bg-white">
        <img
          src="/images/bg-1.png"
          alt="Peternakan ayam broiler modern Kandang Makmur Sejahtera di Medan"
          className="w-full h-full object-cover opacity-100 scale-[1.8] origin-center"
        />
        {/* Vignette Effect Overlay (Gelap di pinggir, agak gelap di tengah agar teks jelas) */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, rgba(13,31,10,0.5) 0%, rgba(13,31,10,0.9) 100%)' }}></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <p className="font-body text-xs md:text-sm font-bold uppercase tracking-[0.12em] text-white/90 drop-shadow-md mb-6">

        </p>

        <h1 className="font-hero font-extrabold text-4xl md:text-5xl lg:text-6xl mb-12 leading-[1.4] text-white drop-shadow-xl tracking-tight">
          Langsung dari Peternak <br className="hidden md:block" />
          Harga Tangan Pertama <br className="hidden md:block" />

        </h1>

      </motion.div>
    </section>
  );
};

export default Hero;
