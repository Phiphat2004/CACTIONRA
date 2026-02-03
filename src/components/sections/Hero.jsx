import React from 'react';
import { motion } from 'motion/react';
import { Mascot } from '../shared/Mascot.jsx';

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-[#F5F5F2] py-20 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="z-10"
        >
          <div className="flex items-center gap-4 mb-6">
            <Mascot className="w-16 h-16" />
            <span className="px-4 py-1 bg-[#E8DCC3] text-[#5A4633] rounded-full text-xs font-semibold tracking-wider uppercase">
              Innovation & Nature
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-[#5A4633] leading-tight mb-6">
            Da sinh học từ <span className="text-[#3D7D4E]">cây xương rồng</span> – Vật liệu xanh cho tương lai
          </h1>
          <p className="text-lg lg:text-xl text-[#5A4633]/80 mb-10 max-w-xl">
            A sustainable, vegan, bio-based leather solution that respects our planet while providing premium quality for the world of tomorrow.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-[#3D7D4E] text-white rounded-[20px] font-semibold hover:bg-[#3D7D4E]/90 transition-all shadow-lg shadow-[#3D7D4E]/10">
              Khám phá dự án
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-[32px] overflow-hidden bg-[#E8DCC3]"
        >
          <img 
            src="https://images.unsplash.com/photo-1758927837563-e221ef47a951?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWN0dXMlMjBsZWFmJTIwbWFjcm8lMjB0ZXh0dXJlfGVufDF8fHx8MTc2OTUxMDAwOXww&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Cactus texture"
            className="w-full h-full object-cover opacity-90 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#E8DCC3]/40 to-transparent" />
        </motion.div>
      </div>

      {/* Decorative background shapes */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#3D7D4E]/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#C46C43]/5 rounded-full blur-3xl" />
    </section>
  );
};




