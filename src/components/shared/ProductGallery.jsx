import { ImageWithFallback } from '../figma/ImageWithFallback.jsx';

const products = [
  {
    image: "https://images.unsplash.com/photo-1650542218150-5e59a58d4312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwbGVhdGhlciUyMGJhZ3xlbnwxfHx8fDE3NjMwMzM2MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Túi xách cao cấp",
    category: "Fashion"
  },
  {
    image: "https://images.unsplash.com/photo-1703355685552-885762b8c9b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwd2FsbGV0JTIwYWNjZXNzb3JpZXN8ZW58MXx8fHwxNzYzMDU4MzIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Ví & phụ kiện",
    category: "Accessories"
  },
  {
    image: "https://images.unsplash.com/photo-1653868250450-b83e6263d427?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwc2hvZXMlMjBzdXN0YWluYWJsZXxlbnwxfHx8fDE3NjMwNzcxODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Giày dép bền vững",
    category: "Footwear"
  },
  {
    image: "https://images.unsplash.com/photo-1641910177671-4c75efb5383c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmdXJuaXR1cmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjMwNjQ1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Nội thất hiện đại",
    category: "Interior"
  },
  {
    image: "https://images.unsplash.com/photo-1637868796504-32f45a96d5a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwdGV4dHVyZSUyMG5hdHVyYWx8ZW58MXx8fHwxNzYzMDc3MTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Vật liệu trang trí",
    category: "Decor"
  },
  {
    image: "https://images.unsplash.com/photo-1650542218150-5e59a58d4312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwbGVhdGhlciUyMGJhZ3xlbnwxfHx8fDE3NjMwMzM2MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Phụ kiện thời trang",
    category: "Accessories"
  }
];

export function ProductGallery() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#5A4633] mb-4">
            Ứng dụng vật liệu
          </h2>
          <p className="text-lg text-[#5A4633]/70 mt-4 max-w-2xl mx-auto">
            Khám phá các ứng dụng tiềm năng của Cactiora trong các lĩnh vực khác nhau
          </p>
          <div className="w-24 h-1 bg-[#74C27B] mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <ImageWithFallback
                src={product.image}
                alt={product.title}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm opacity-80 mb-1">{product.category}</p>
                <h3 className="text-xl">{product.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



