import React from 'react';
import { motion } from 'motion/react';

export const TeamVision = () => {
  return (
    <section className="py-24 lg:py-40 bg-[#F5F5F2]">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="bg-[#3D7D4E] rounded-[40px] p-12 lg:p-24 text-white relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-3xl"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Tầm nhìn của Cactiora
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-12 italic">
              "Chúng tôi không chỉ tạo ra một loại vải, chúng tôi đang xây dựng một tương lai nơi thời trang và thiên nhiên cùng tồn tại trong sự hòa hợp tuyệt đối. Sứ mệnh của chúng tôi là thay thế mọi nguồn da độc hại bằng giải pháp xanh từ sa mạc."
            </p>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-[#E8DCC3]/20 border border-white/20" />
              <div>
                <p className="font-bold text-lg">Đội ngũ Cactiora</p>
                <p className="text-white/70">Tiên phong Vật liệu Bền vững</p>
              </div>
            </div>
          </motion.div>
          
          {/* Decorative icons in background */}
          <div className="absolute top-10 right-10 opacity-10">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 180C100 180 20 135 20 70C20 35 45 10 70 10C85 10 95 15 100 25C105 15 115 10 130 10C155 10 180 35 180 70C180 135 100 180 100 180Z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};




