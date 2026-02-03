import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback.jsx';

export const About = () => {
  return (
    <section id="about" className="py-24 lg:py-40 bg-white">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-[24px] overflow-hidden aspect-[4/5]"
            >
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1636407149917-32fa6b508d49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGNhY3R1cyUyMGZhcm0lMjBkZXNlcnR8ZW58MXx8fHwxNzY5NTEwMDA5fDA" 
                alt="Cactus field"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-[24px] overflow-hidden aspect-[4/5] mt-12"
            >
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1722407348192-a44ce83704da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdXN0YWluYWJsZSUyMG1hdGVyaWFsJTIwbGFib3JhdG9yeSUyMW5zY2llbmNlfGVufDF8fHx8MTc2OTUxMDAwOXww" 
                alt="Material science"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-[#3D7D4E] font-semibold tracking-wider uppercase text-sm mb-4 block">
              Tại sao chọn cây xương rồng?
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#5A4633] mb-8 leading-tight">
              Cactiora – Vật liệu mới từ thiên nhiên
            </h2>
            <p className="text-lg text-[#5A4633]/80 leading-relaxed mb-6">
              Xương rồng là loài thực vật có khả năng thích nghi tuyệt vời với điều kiện khắc nghiệt, tiêu tốn rất ít nước và không cần thuốc trừ sâu. Chúng tôi tận dụng sức mạnh sinh học này để tạo ra một loại da cao cấp, bền bỉ và hoàn toàn thân thiện với môi trường.
            </p>
            <p className="text-lg text-[#5A4633]/80 leading-relaxed">
              Cactiora không chỉ là một sản phẩm, đó là một bước tiến trong công nghệ vật liệu, kết hợp giữa tri thức khoa học hiện đại và sự trân trọng đối với hệ sinh thái tự nhiên.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};




