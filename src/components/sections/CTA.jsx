import React from 'react';
import { motion } from 'motion/react';

export const CTA = () => {
  return (
    <section id="contact" className="py-24 lg:py-40 bg-white">
      <div className="max-w-[1320px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#E8DCC3]/30 rounded-[32px] p-12 lg:p-24"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#5A4633] mb-6">
            Kết nối cùng chúng tôi
          </h2>
          <p className="text-lg lg:text-xl text-[#5A4633]/70 mb-10 max-w-2xl mx-auto">
            Liên hệ để tìm hiểu thêm về dự án và hợp tác phát triển vật liệu bền vững cho thương hiệu của bạn.
          </p>
          <a 
            href="https://www.facebook.com/profile.php?id=61587132959901"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-[#3D7D4E] text-white rounded-[20px] font-bold text-lg hover:bg-[#3D7D4E]/90 transition-all shadow-xl shadow-[#3D7D4E]/20"
          >
            Liên hệ hợp tác
          </a>
        </motion.div>
      </div>
    </section>
  );
};




