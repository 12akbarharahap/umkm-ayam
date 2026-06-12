import React, { useState, useEffect, useRef } from 'react';

const PapanHarga = () => {
  const [tanggal, setTanggal] = useState('');
  
  // Initial prices setup
  const [prices, setPrices] = useState({
    ayamUtuh: 'Rp 32.000',
    ayamParting: 'Rp 33.500',
    filletDada: 'Rp 45.000',
    telurPeti: 'Rp 26.500',
  });

  useEffect(() => {
    // Set current date
    const hari = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
    const bulan = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
    const d = new Date();
    setTanggal(`${hari[d.getDay()]}, ${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()}`);
    
    // Load from localStorage if available
    const savedPrices = localStorage.getItem('harga_hari_ini');
    if (savedPrices) {
      setPrices(JSON.parse(savedPrices));
    }
  }, []);

  const handlePriceChange = (key, value) => {
    const newPrices = { ...prices, [key]: value };
    setPrices(newPrices);
    localStorage.setItem('harga_hari_ini', JSON.stringify(newPrices));
  };

  return (
    <section className="bg-[#1a1a1a] text-white py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-border-dark pb-4">
          <h2 className="font-display font-bold text-2xl flex items-center gap-3">
            Papan Harga Harian
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </h2>
          <p className="font-body text-text-dim text-sm mt-2 md:mt-0 font-medium tracking-wide">
            {tanggal}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <PriceCard 
            id="ayamUtuh"
            title="Ayam Karkas Utuh" 
            unit="/ kg" 
            price={prices.ayamUtuh} 
            onChange={handlePriceChange}
            accent="ayam"
          />
          <PriceCard 
            id="ayamParting"
            title="Ayam Parting" 
            unit="/ kg" 
            price={prices.ayamParting} 
            onChange={handlePriceChange}
            accent="ayam"
          />
          <PriceCard 
            id="filletDada"
            title="Fillet Dada" 
            unit="/ kg" 
            price={prices.filletDada} 
            onChange={handlePriceChange}
            accent="ayam"
          />
          <PriceCard 
            id="telurPeti"
            title="Telur Grosir" 
            unit="/ kg" 
            price={prices.telurPeti} 
            onChange={handlePriceChange}
            accent="telur"
          />
        </div>
        <p className="text-center text-xs text-text-dark-dim mt-6 italic">
          *Harga di atas adalah estimasi grosir dan dapat berubah sewaktu-waktu. Sentuh harga untuk mengedit (khusus admin).
        </p>
      </div>
    </section>
  );
};

const PriceCard = ({ id, title, unit, price, onChange, accent }) => {
  const contentEditableRef = useRef(null);

  const handleBlur = () => {
    if (contentEditableRef.current) {
      onChange(id, contentEditableRef.current.textContent);
    }
  };

  const accentColorClass = accent === 'ayam' ? 'text-accent-ayam' : 'text-accent-telur';

  return (
    <div className="bg-primary-base p-4 rounded-xl border border-border-dark flex flex-col justify-center items-center text-center">
      <h3 className="font-body text-xs md:text-sm font-semibold text-text-dark mb-1">{title}</h3>
      <div className="flex items-baseline gap-1 mt-2">
        <span 
          ref={contentEditableRef}
          contentEditable="true"
          suppressContentEditableWarning={true}
          onBlur={handleBlur}
          className={`font-display font-bold text-xl md:text-2xl outline-none focus:bg-white/10 px-2 rounded cursor-text transition-colors ${accentColorClass}`}
          title="Sentuh untuk mengubah harga"
        >
          {price}
        </span>
        <span className="text-text-dark-dim text-xs font-medium">{unit}</span>
      </div>
    </div>
  );
};

export default PapanHarga;
