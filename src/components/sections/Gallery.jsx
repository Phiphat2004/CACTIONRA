import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback.jsx';

export const Gallery = () => {
  const concepts = [
    {
      title: "Phụ kiện thời trang",
      image: "https://images.unsplash.com/photo-1662376567869-be461ad4d48d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZWNvJTIwZnJpZW5kbHklMjBwcm9kdWN0JTIwZGVzaWduJTIwYmFncyUyMHNob2VzfGVufDF8fHx8MTc2OTUxMDAwOXww",
    },
    {
      title: "Nội thất cao cấp",
      image: "https://images.unsplash.com/photo-1758927837563-e221ef47a951?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWN0dXMlMjBsZWFmJTIwbWFjcm8lMjB0ZXh0dXJlfGVufDF8fHx8MTc2OTUxMDAwOXww",
    },
    {
      title: "Vật liệu ô tô",
      image: "https://images.unsplash.com/photo-1722407348192-a44ce83704da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdXN0YWluYWJsZSUyMG1hdGVyaWFsJTIwbGFib3JhdG9yeSUyMXNjaWVuY2V8ZW58MXx8fHwxNzY5NTEwMDA5fDA",
    },
  ];

  return (
    <section id="gallery" className="py-24 lg:py-40 bg-white">
      <div className="max-w-[1320px] mx-auto px-6 mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#5A4633] mb-4">
          Ứng dụng vật liệu
        </h2>
        <p className="text-lg text-[#5A4633]/60 max-w-2xl">
          Cactiora có thể được ứng dụng trong nhiều lĩnh vực từ thời trang, nội thất đến công nghiệp ô tô. (Hình ảnh mang tính chất minh họa khái niệm).
        </p>
      </div>

      <div className="max-w-[1320px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {concepts.map((concept, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[24px] aspect-[4/5]"
          >
            <ImageWithFallback 
              src={concept.image} 
              alt={concept.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
              <h3 className="text-white text-xl font-bold">{concept.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};




