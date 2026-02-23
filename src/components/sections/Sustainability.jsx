import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback.jsx';

export const Sustainability = () => {
  return (
    <section id="sustainability" className="py-24 lg:py-40 bg-white overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#5A4633] mb-12">
              Bền vững từ tự nhiên
            </h2>
            
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="w-12 h-12 flex-shrink-0 bg-[#E8DCC3] rounded-full flex items-center justify-center font-bold text-[#3D7D4E]">01</div>
                <div>
                  <h3 className="text-xl font-bold text-[#5A4633] mb-3">Nông nghiệp ít nước</h3>
                  <p className="text-[#5A4633]/70 leading-relaxed">
                    Chúng tôi canh tác trên những vùng đất khô hạn, nơi các loại cây khác không thể sinh trưởng, giúp bảo tồn tài nguyên nước quý giá.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 flex-shrink-0 bg-[#E8DCC3] rounded-full flex items-center justify-center font-bold text-[#3D7D4E]">02</div>
                <div>
                  <h3 className="text-xl font-bold text-[#5A4633] mb-3">Thu hoạch tái tạo</h3>
                  <p className="text-[#5A4633]/70 leading-relaxed">
                    Chỉ những lá xương rồng trưởng thành mới được thu hoạch, cho phép cây mẹ tiếp tục phát triển và hấp thụ CO2 trong nhiều thập kỷ.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 flex-shrink-0 bg-[#E8DCC3] rounded-full flex items-center justify-center font-bold text-[#3D7D4E]">03</div>
                <div>
                  <h3 className="text-xl font-bold text-[#5A4633] mb-3">Quy trình sản xuất sạch</h3>
                  <p className="text-[#5A4633]/70 leading-relaxed">
                    Sử dụng các hóa chất không độc hại và hệ thống tuần hoàn nước đóng kín để ngăn chặn ô nhiễm môi trường.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[32px] overflow-hidden aspect-[4/5] relative z-10">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1762893996953-b2f403a03f32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBsYW5kc2NhcGUlMjBzb2Z0JTIwbGlnaHRpbmclMjBtb3JuaW5nfGVufDF8fHx8MTc2OTUxMDAwOXww" 
                alt="Cảnh quan sa mạc"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative organic shape */}
            <div className="absolute -top-10 -right-10 w-full h-full bg-[#E8DCC3] rounded-[32px] -z-0 translate-x-4 translate-y-4 opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};




