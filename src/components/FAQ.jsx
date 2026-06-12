import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: "Berapa minimal pemesanan untuk mendapatkan harga grosir?",
    answer: "Untuk harga grosir, minimal pesanan ayam potong adalah 10 ekor/kg dan telur fresh 1 peti. Namun, kami juga melayani pembelian eceran untuk warung skala kecil dengan harga yang tetap bersahabat dan menguntungkan."
  },
  {
    question: "Apakah melayani pesan antar (delivery)? Apakah gratis ongkir?",
    answer: "Ya, kami memiliki armada thermovan dan truk ringan sendiri. Khusus area Kota Medan dan sekitarnya, kami berikan fasilitas Gratis Ongkir dengan minimal pesanan tertentu. Untuk luar kota bisa menggunakan bus antarkota."
  },
  {
    question: "Kapan batas waktu pemesanan (cut-off time) untuk pengiriman besok pagi?",
    answer: "Agar jadwal rute pengiriman pagi tidak terhambat dan stok terjamin paling segar dari RPA/kandang, kami sangat menyarankan Anda mengirim list pesanan maksimal H-1 sebelum jam 15.00 WIB."
  },
  {
    question: "Bagaimana sistem pembayarannya? Apakah bisa COD?",
    answer: "Pembayaran awal dapat dilakukan via transfer bank (BCA/Mandiri/dsb). Khusus untuk mitra rutin yang sudah berlangganan dan terverifikasi, kami menyediakan fleksibilitas Bayar di Tempat (Cash on Delivery / COD)."
  },
  {
    question: "Bagaimana jika ada telur pecah atau daging ayam yang kurang segar saat diterima?",
    answer: "KMS menjamin garansi kualitas 100%. Silakan cek pesanan bersama kurir kami saat barang tiba. Jika ada cacat pengiriman, cukup foto dan laporkan ke admin/kurir, kami akan langsung memproses penggantian di rute pengiriman berikutnya tanpa biaya tambahan."
  }
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`mb-4 transition-all duration-300 ${!isOpen ? 'border-l-[6px] border-[#FABB05]' : 'border-l-[6px] border-transparent'} border-b-[2px] border-text-main`}>
      <button
        className="w-full py-5 px-4 flex justify-between items-center text-left focus:outline-none group"
        onClick={onClick}
      >
        <h3 className="font-body font-bold text-base md:text-lg text-text-main group-hover:text-[#FABB05] transition-colors pr-8">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-text-main shrink-0"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-4 pb-6 pt-2 text-text-secondary leading-relaxed text-sm md:text-base">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // Buka accordion pertama secara default

  return (
    <section id="faq" className="bg-surface py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-border/50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* Kolom Kiri: Hanya Ilustrasi */}
        <div className="lg:w-1/2 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full relative"
          >
            {/* Ilustrasi Aktor Container */}
            <div className="relative justify-center items-center flex w-full py-10 lg:py-0">
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] bg-accent-main/10 rounded-full blur-3xl z-0"></div>

              <img
                src="/images/actor.png"
                alt="Customer Service KMS"
                className="relative z-10 w-[120%] lg:w-[135%] max-w-none h-auto object-contain mix-blend-multiply origin-center scale-110 lg:scale-125"
              />
            </div>
          </motion.div>
        </div>

        {/* Kolom Kanan: Judul & Accordion List */}
        <div className="lg:w-1/2 w-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="inline-block bg-[#D48D31] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 shadow-sm">
              Pertanyaan Umum
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-[3.5rem] text-text-main leading-tight">
              Semua yang Perlu Anda Ketahui!
            </h2>
          </motion.div>

          <div className="w-full mt-4">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
