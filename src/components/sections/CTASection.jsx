import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-[#3D7D4E] to-[#2d5e3a] relative overflow-hidden" id="contact">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border-2 border-white rounded-full" />
        <div className="absolute top-1/2 right-1/3 w-20 h-20 border-2 border-white rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-6">
          <span className="text-6xl">🌵</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl text-white mb-6">
          Kết nối cùng chúng tôi
        </h2>
        
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Liên hệ để tìm hiểu thêm về dự án Cactiora và cơ hội hợp tác phát triển. 
          Chúng tôi luôn sẵn sàng chia sẻ và đồng hành cùng các đối tác có chung tầm nhìn.
        </p>

        <a
          href="https://www.facebook.com/profile.php?id=61587132959901"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-white text-[#3D7D4E] hover:bg-[#F5F5F2] rounded-full px-8 py-4 shadow-xl group font-medium"
        >
          Liên hệ hợp tác
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}



