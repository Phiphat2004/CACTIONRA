import { ImageWithFallback } from '../figma/ImageWithFallback.jsx';

export function AboutProduct() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#5A4633] mb-4">
            Cactiora – Vật liệu mới từ thiên nhiên
          </h2>
          <div className="w-24 h-1 bg-[#74C27B] mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1603708547229-db8a055e5af0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWN0dXMlMjBwbGFudCUyMGRlc2VydHxlbnwxfHx8fDE3NjMwNzcxODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Cactus plant"
              className="w-full h-80 object-cover"
            />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1637868796504-32f45a96d5a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwdGV4dHVyZSUyMG5hdHVyYWx8ZW58MXx8fHwxNzYzMDc3MTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Leather texture"
              className="w-full h-80 object-cover"
            />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1650542218150-5e59a58d4312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwbGVhdGhlciUyMGJhZ3xlbnwxfHx8fDE3NjMwMzM2MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Leather bag"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-[#5A4633]/80 leading-relaxed">
            Cactiora là vật liệu da sinh học được phát triển từ xương rồng, mang đến giải pháp thay thế 
            bền vững và thân thiện với môi trường cho da truyền thống. Với quy trình sản xuất tiên tiến, 
            Cactiora giữ được độ mềm, độ bền và tính thẩm mỹ cao, phù hợp cho nhiều ứng dụng trong 
            thời trang và nội thất cao cấp.
          </p>
        </div>
      </div>
    </section>
  );
}



