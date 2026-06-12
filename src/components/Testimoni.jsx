import React from 'react';
import { Star } from 'lucide-react';

const Testimoni = () => {
  return (
    <section className="bg-surface-dim pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-main mb-4">
            Dipercaya 500+ Mitra Usaha
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard 
            name="Ibu Rahma"
            role="Pemilik Warung Nasi Gurih"
            content="Sejak langganan ayam potong di sini, ukuran ayamnya selalu pas dan segar. Pengiriman juga selalu pagi sebelum warung buka. Sangat membantu!"
          />
          <TestimonialCard 
            name="Pak Budi"
            role="Agen Telur Pasar Induk"
            content="Ambil telur per peti di sini harganya miring dan yang paling penting cangkangnya tebal-tebal, jarang banget ada yang pecah di jalan."
          />
          <TestimonialCard 
            name="Chef Andre"
            role="Head Bakery"
            content="Kualitas putih telur dari supplier ini sangat konsisten. Adonan kue mengembang sempurna. Order dadakan juga cepat direspon."
          />
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ name, role, content }) => (
  <article className="bg-white p-8 rounded-2xl border border-border shadow-sm">
    <div className="flex gap-1 mb-6 text-yellow-400">
      <Star size={20} fill="currentColor" />
      <Star size={20} fill="currentColor" />
      <Star size={20} fill="currentColor" />
      <Star size={20} fill="currentColor" />
      <Star size={20} fill="currentColor" />
    </div>
    <p className="text-text-secondary mb-8 italic">"{content}"</p>
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 bg-surface-dim rounded-full flex items-center justify-center font-display font-bold text-lg text-text-main">
        {name.charAt(0)}
      </div>
      <div>
        <h3 className="font-body font-bold text-text-main">{name}</h3>
        <p className="text-xs text-text-dim">{role}</p>
      </div>
    </div>
  </article>
);

export default Testimoni;
