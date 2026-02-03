import React from 'react';
import { motion } from 'motion/react';
import { Sprout, Scissors, Sun, Factory } from 'lucide-react';

export const Process = () => {
  const steps = [
    {
      title: "Canh tác",
      desc: "Trồng xương rồng hữu cơ tại các vùng đất khô hạn.",
      icon: <Sprout className="w-8 h-8" />,
    },
    {
      title: "Thu hoạch",
      desc: "Chỉ chọn lọc những lá trưởng thành để bảo vệ cây.",
      icon: <Scissors className="w-8 h-8" />,
    },
    {
      title: "Phơi khô tự nhiên",
      desc: "Sử dụng năng lượng mặt trời để sấy khô lá xương rồng.",
      icon: <Sun className="w-8 h-8" />,
    },
    {
      title: "Chế biến sinh học",
      desc: "Chuyển hóa thành tấm da sinh học chất lượng cao.",
      icon: <Factory className="w-8 h-8" />,
    },
  ];

  return (
    <section id="process" className="py-24 lg:py-40 bg-[#F5F5F2]">
      <div className="max-w-[1320px] mx-auto px-6 text-center mb-20">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#5A4633] mb-4">
          Quy trình sản xuất Cactiora
        </h2>
        <p className="text-lg text-[#5A4633]/60 max-w-2xl mx-auto">
          Minh bạch và bền vững trong từng công đoạn chế tác.
        </p>
      </div>

      <div className="max-w-[1320px] mx-auto px-6 relative">
        {/* Connecting line for desktop */}
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-[#3D7D4E]/20 -translate-y-1/2 z-0" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full bg-white border border-[#3D7D4E]/10 flex items-center justify-center text-[#3D7D4E] mb-8 shadow-sm">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-[#5A4633] mb-4">{step.title}</h3>
              <p className="text-[#5A4633]/70">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};




