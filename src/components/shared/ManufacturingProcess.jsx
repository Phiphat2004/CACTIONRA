import { Sprout, Scissors, Sun, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: Sprout,
    title: "Grow",
    description: "Trồng xương rồng theo phương pháp hữu cơ"
  },
  {
    icon: Scissors,
    title: "Harvest",
    description: "Thu hoạch lá trưởng thành một cách bền vững"
  },
  {
    icon: Sun,
    title: "Natural Drying",
    description: "Sấy khô tự nhiên dưới ánh nắng mặt trời"
  },
  {
    icon: Sparkles,
    title: "Xử lý sinh học",
    description: "Chế biến sinh học thành da cao cấp"
  }
];

export function ManufacturingProcess() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-[#E8DCC3]" id="process">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#5A4633] mb-4">
            Quy trình sản xuất Cactiora
          </h2>
          <div className="w-24 h-1 bg-[#74C27B] mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-14 left-[60%] w-[80%] h-0.5 bg-[#3D7D4E]/20" />
                )}
                
                <div className="relative text-center">
                  {/* Step number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#3D7D4E] text-white rounded-full flex items-center justify-center z-10">
                    {index + 1}
                  </div>

                  {/* Icon circle */}
                  <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10">
                    <Icon className="w-12 h-12 text-[#3D7D4E]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl text-[#5A4633] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#5A4633]/70">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[#5A4633]/70 max-w-2xl mx-auto">
            Quy trình sản xuất Cactiora được thiết kế để tối ưu hóa hiệu quả sử dụng tài nguyên 
            và giảm thiểu tác động đến môi trường ở từng giai đoạn.
          </p>
        </div>
      </div>
    </section>
  );
}



