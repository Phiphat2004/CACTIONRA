import React from 'react';
import { motion } from 'motion/react';
import { Droplets, Leaf, ShieldCheck, Recycle, Sparkles } from 'lucide-react';

export const Benefits = () => {
  const benefits = [
    {
      title: "Tiết kiệm 90% nước",
      desc: "Quy trình trồng và sản xuất tiêu tốn ít nước hơn đáng kể so với da động vật hoặc da nhân tạo thông thường.",
      icon: <Droplets className="w-8 h-8 text-[#3D7D4E]" strokeWidth={1.5} />,
    },
    {
      title: "Thuần chay & Nhân đạo",
      desc: "Hoàn toàn không sử dụng thành phần động vật, đạt chuẩn vegan và không gây hại đến sinh vật.",
      icon: <Leaf className="w-8 h-8 text-[#3D7D4E]" strokeWidth={1.5} />,
    },
    {
      title: "Bền bỉ & Linh hoạt",
      desc: "Khả năng chịu lực cao, chống trầy xước và giữ được độ đàn hồi tự nhiên trong thời gian dài.",
      icon: <ShieldCheck className="w-8 h-8 text-[#3D7D4E]" strokeWidth={1.5} />,
    },
    {
      title: "Phân hủy sinh học",
      desc: "Vật liệu có khả năng phân hủy tự nhiên, giảm thiểu gánh nặng rác thải nhựa cho đại dương.",
      icon: <Recycle className="w-8 h-8 text-[#3D7D4E]" strokeWidth={1.5} />,
    },
    {
      title: "Cảm giác cao cấp",
      desc: "Bề mặt mềm mịn, vân da tự nhiên mang lại trải nghiệm sang trọng tương đương da truyền thống.",
      icon: <Sparkles className="w-8 h-8 text-[#3D7D4E]" strokeWidth={1.5} />,
    },
  ];

  return (
    <section id="benefits" className="py-24 lg:py-40 bg-[#F5F5F2]">
      <div className="max-w-[1320px] mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#5A4633] mb-4">
          Giải pháp bền vững cho tương lai
        </h2>
        <p className="text-lg text-[#5A4633]/60 max-w-2xl mx-auto">
          Cactiora định nghĩa lại tiêu chuẩn của sự sang trọng thông qua trách nhiệm với môi trường.
        </p>
      </div>

      <div className="max-w-[1320px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="p-10 bg-white rounded-[24px] shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="mb-6 p-4 bg-[#F5F5F2] w-fit rounded-2xl">
              {benefit.icon}
            </div>
            <h3 className="text-2xl font-bold text-[#5A4633] mb-4">{benefit.title}</h3>
            <p className="text-[#5A4633]/70 leading-relaxed">{benefit.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};




