import React, { useState } from 'react';
import { Menu, MessageCircle } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true); // Scroll down -> hide
    } else if (latest < previous) {
      setHidden(false); // Scroll up -> show
    }
  });

  return (
    <motion.header 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      initial="hidden"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 w-full z-50 bg-white text-text-main shadow-md border-b border-border/30"
    >
      <nav className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <img src="/images/logo.png" alt="Kandang Makmur Sejahtera" className="h-16 md:h-24 w-auto scale-[1.3] md:scale-[1.6] origin-left mix-blend-multiply" />
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#ayam" className="hover:text-accent-main px-3 py-2 rounded-md text-base font-semibold transition-colors">Ayam Potong</a>
              <a href="#telur" className="hover:text-accent-main px-3 py-2 rounded-md text-base font-semibold transition-colors">Telur Fresh</a>
              <a href="#logistik" className="hover:text-accent-main px-3 py-2 rounded-md text-base font-semibold transition-colors">Pengiriman</a>
              <a href="#faq" className="hover:text-accent-main px-3 py-2 rounded-md text-base font-semibold transition-colors">FAQ</a>
            </div>
          </div>

          {/* Mobile WA Button */}
          <div className="md:hidden flex items-center">
            <a 
              href="#kontak" 
              className="flex items-center gap-2 bg-[#25D366] text-white px-3 py-1.5 rounded-full text-sm font-semibold hover:bg-green-600 transition-colors"
            >
              <MessageCircle size={16} />
              <span>Pesan</span>
            </a>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
