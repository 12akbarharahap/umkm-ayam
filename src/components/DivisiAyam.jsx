import React from 'react';
import { ShieldCheck, Syringe, HeartPulse, Scale, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const DivisiAyam = () => {
  return (
    <section id="ayam" className="bg-surface pt-16 pb-24 overflow-hidden">
      {/* SEKSI A & B: Hero / Paradise Village equivalent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* KIRI: Teks & Statistik */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-accent-main text-sm font-bold uppercase tracking-widest mb-3">
              Tentang Peternakan Kami
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-text-main mb-6 leading-tight">
              Pusat Bibit & Ayam <br className="hidden md:block"/> Berkualitas Tinggi
            </h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Kami berdedikasi menyediakan bibit unggul (DOC & Pullet) serta ayam hidup bermutu tinggi untuk mendukung kesuksesan bisnis peternakan dan kuliner Anda. Tumbuh bersama peternak lokal dengan standar operasional yang ketat.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <div className="text-4xl font-display font-bold text-accent-main mb-2">99<span className="text-2xl">%</span></div>
                <div className="text-text-secondary font-medium">Akurasi Sexing</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-accent-main mb-2">10<span className="text-2xl">k+</span></div>
                <div className="text-text-secondary font-medium">Klien Aktif</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-accent-main mb-2">Top</div>
                <div className="text-text-secondary font-medium">Breeder Nasional</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-accent-main mb-2">7+</div>
                <div className="text-text-secondary font-medium">Penghargaan</div>
              </div>
            </div>

            <button className="bg-accent-main text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#c95914] transition-colors hover:-translate-y-1 transform">
              Pelajari Lebih Lanjut
            </button>
          </motion.div>

          {/* KANAN: Bento Image Grid & Bullet points */}
          <div className="relative mt-10 lg:mt-0">
             {/* Bento Grid layout matching the reference */}
             <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="w-full h-48 md:h-64 rounded-3xl col-span-2 overflow-hidden shadow-md" 
                >
                  <img src="/images/pullet.webp" alt="Ayam petelur remaja pullet sehat bebas penyakit" className="w-full h-full object-cover scale-110" />
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="w-full h-40 md:h-56 rounded-3xl overflow-hidden shadow-md" 
                >
                  <img src="/images/doc-petelur-betina.webp" alt="Bibit ayam DOC petelur betina berkualitas tinggi" className="w-full h-full object-cover scale-110" />
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-text-main text-white rounded-3xl p-6 flex flex-col justify-center relative overflow-hidden shadow-xl"
                >
                  <div className="absolute -right-4 -bottom-4 text-white/5">
                    <ShieldCheck size={140} />
                  </div>
                  <ShieldCheck size={36} className="text-accent-main mb-4 relative z-10" />
                  <h3 className="font-display font-bold text-2xl relative z-10 leading-tight">Kualitas<br/>Terjamin</h3>
                </motion.div>
             </div>
             
             {/* Bullet points mapping to "Authentic Culture" */}
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="mt-12 bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-border/50 relative z-20 md:-ml-12"
             >
                <h3 className="font-display font-bold text-2xl md:text-3xl text-text-main mb-6 leading-tight">Peternakan Modern dengan Standar Tinggi</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 text-text-secondary">
                    <CheckCircle2 className="text-accent-main shrink-0" size={22} />
                    <span className="font-medium">DOC Segar dan sehat setiap minggu</span>
                  </li>
                  <li className="flex items-center gap-4 text-text-secondary">
                    <CheckCircle2 className="text-accent-main shrink-0" size={22} />
                    <span className="font-medium">Vaksinasi lengkap & jadwal ketat</span>
                  </li>
                  <li className="flex items-center gap-4 text-text-secondary">
                    <CheckCircle2 className="text-accent-main shrink-0" size={22} />
                    <span className="font-medium">Konsultasi manajemen peternakan gratis</span>
                  </li>
                  <li className="flex items-center gap-4 text-text-secondary">
                    <CheckCircle2 className="text-accent-main shrink-0" size={22} />
                    <span className="font-medium">Pengiriman aman dengan garansi hidup</span>
                  </li>
                </ul>
             </motion.div>
          </div>
        </div>
      </div>

      {/* SEKSI C: Full width banner break */}
      <div className="w-full relative h-[400px] mt-16 mb-24 overflow-hidden">
        <picture>
           <source srcSet="/images/broiler-besar.avif" type="image/avif" />
           <source srcSet="/images/broiler-besar.webp" type="image/webp" />
           <img src="/images/broiler-besar.png" alt="Ayam broiler besar siap panen untuk kebutuhan komersial" className="w-full h-full object-cover object-center" />
        </picture>
        <div className="absolute inset-0 bg-text-main/70 flex flex-col items-center justify-center text-center px-4 backdrop-blur-[2px]">
          <motion.span 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-accent-main font-bold tracking-widest uppercase mb-4"
          >
            Mitra Unggas Terbaik
          </motion.span>
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             viewport={{ once: true }}
             className="text-white font-display font-bold text-3xl md:text-5xl max-w-4xl leading-tight mb-8"
          >
            Kualitas Daging Sempurna,<br/>Ketahanan Hidup Maksimal
          </motion.h2>
          <motion.button 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             viewport={{ once: true }}
             className="border-2 border-white text-white px-10 py-3 rounded-full font-bold hover:bg-white hover:text-text-main transition-colors"
          >
            Hubungi Kami Sekarang
          </motion.button>
        </div>
      </div>

      {/* SEKSI D: Keunggulan Detail (Perfect Destination equivalent) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* KIRI: Overlapping images styling like Serenity & Tranquility */}
          <div className="relative h-[600px] hidden md:block">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="absolute top-0 left-0 w-3/4 h-[300px] rounded-[2rem] shadow-xl overflow-hidden z-10 border-4 border-white"
            >
              <img src="/images/broiler-kecil.webp" alt="Bibit ayam broiler kecil sehat dan lincah" className="w-full h-full object-cover scale-110" />
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               viewport={{ once: true }}
               className="absolute bottom-16 right-0 w-2/3 h-[280px] rounded-[2rem] shadow-xl overflow-hidden z-0 border-4 border-white"
            >
              <img src="/images/Ayam-parting.webp" alt="Daging ayam potong parting segar untuk bisnis kuliner" className="w-full h-full object-cover scale-110" />
            </motion.div>
            
            {/* Floating text boxes */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.3 }}
               viewport={{ once: true }}
               className="absolute top-[260px] left-8 bg-white p-5 rounded-2xl shadow-xl z-20 w-[220px]"
            >
              <h3 className="font-display font-bold text-text-main mb-1 text-lg">Sehat & Lincah</h3>
              <p className="text-sm text-text-secondary leading-snug">Pertumbuhan optimal tanpa cacat fisik.</p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.4 }}
               viewport={{ once: true }}
               className="absolute bottom-6 right-16 bg-white p-5 rounded-2xl shadow-xl z-20 w-[220px]"
            >
              <h3 className="font-display font-bold text-text-main mb-1 text-lg">Daging Tebal</h3>
              <p className="text-sm text-text-secondary leading-snug">Rasio tulang & daging yang sangat sempurna.</p>
            </motion.div>
          </div>

          {/* KANAN: Fitur list with square icons */}
          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={{
               visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
               hidden: { opacity: 0 }
             }}
          >
            <span className="text-accent-main font-bold uppercase tracking-widest text-sm mb-3 block">Mengapa Memilih Kami?</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-text-main mb-12 leading-tight">Keunggulan Kemitraan Peternakan</h2>
            
            <div className="space-y-8">
              <FeatureItem 
                icon={<Syringe size={28} className="text-white" />}
                title="Vaksinasi Lengkap & Terjadwal"
                desc="Unggas terlindungi dari penyakit berbahaya sejak masa pembibitan dengan bio-security yang sangat ketat."
              />
              <FeatureItem 
                icon={<HeartPulse size={28} className="text-white" />}
                title="Tingkat Kehidupan Tinggi"
                desc="Genetik strain unggul menghasilkan angka mortalitas yang sangat rendah, mengamankan nilai investasi peternak."
              />
              <FeatureItem 
                icon={<Scale size={28} className="text-white" />}
                title="Pertumbuhan Sangat Seragam"
                desc="Manajemen pakan pabrikan berstandar memastikan pencapaian bobot panen merata di seluruh populasi kandang."
              />
              <FeatureItem 
                icon={<ShieldCheck size={28} className="text-white" />}
                title="Garansi Pengiriman Aman"
                desc="Sistem logistik terspesialisasi yang menjamin DOC dan ayam tiba di lokasi Anda dalam kondisi sehat tanpa stres berlebih."
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ icon, title, desc }) => (
  <motion.div 
    variants={{
      hidden: { opacity: 0, x: 20 },
      visible: { opacity: 1, x: 0 }
    }}
    className="flex gap-6 items-start group"
  >
    <div className="bg-text-main group-hover:bg-accent-main transition-colors duration-500 p-4 md:p-5 rounded-2xl shadow-md shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="font-body font-bold text-text-main text-xl mb-2">{title}</h3>
      <p className="text-text-secondary text-base leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

export default DivisiAyam;
