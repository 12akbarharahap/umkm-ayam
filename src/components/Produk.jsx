import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    title: "Day Old Chick (DOC) - Final Stock",
    description: "Bibit ayam usia sehari (DOC) berkualitas tinggi dengan tingkat kehidupan maksimal dan genetik unggul untuk pertumbuhan cepat.",
    image: "/images/doc-petelur-betina.png",
  },
  {
    title: "Ayam Hidup Broiler",
    description: "Ayam hidup broiler komersial dengan bobot seragam dan kesehatan terjamin, siap panen untuk berbagai kebutuhan industri kuliner dan pengolahan.",
    image: "/images/broiler-kecil.png",
  },
  {
    title: "Ayam Karkas / Parting",
    description: "Karkas ayam segar dan potongan spesifik higienis, diproses dengan standar Halal dan cold chain yang ketat untuk menjaga kualitas daging.",
    image: "/images/Ayam-parting.png",
  },
  {
    title: "Telur Fresh Pilihan",
    description: "Telur ayam segar langsung dari kandang dengan cangkang tebal dan kuning telur padat. Bebas retak, tersortir rapi, siap penuhi stok harian Anda.",
    image: "/images/telur.jpeg",
  }
];

const Produk = () => {
  return (
    <section id="produk" className="bg-[#FFF8F0] py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-[1000px] mx-auto mt-10">
        <div className="text-center mb-32">
          <h2 className="font-hero font-bold text-3xl md:text-5xl text-[#2c3e50] mb-4">
            Lini Produk Komersial Kami
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto">
            Kandang Makmur Sejahtera menyediakan berbagai jenis produk unggas berkualitas dan terjangkau untuk kebutuhan bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Card Image */}
              <div className="w-full h-56 relative bg-gray-50 border-b border-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-hero font-bold text-2xl text-[#1e3a8a] mb-4 leading-tight">{item.title}</h3>
                <p className="font-body text-text-secondary leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Produk;
