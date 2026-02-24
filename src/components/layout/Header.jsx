import React from 'react';

export const Header = () => {
  const navItems = [
    { name: 'Về dự án', href: '#about' },
    { name: 'Lợi ích', href: '#benefits' },
    { name: 'Quy trình', href: '#process' },
    { name: 'Ứng dụng', href: '#gallery' },
    { name: 'Bền vững', href: '#sustainability' },
    { name: 'Liên hệ', href: 'https://www.facebook.com/profile.php?id=61587132959901', external: true },
  ];

  return (
    <header className="w-full px-6 py-8 bg-transparent">
      <div className="max-w-[1320px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 flex items-center justify-center rounded-full overflow-hidden">
            <img 
              src="/img/avatar.jpg"
              alt="Cactora Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#5A4633]">CACTORA</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="text-sm font-medium text-[#5A4633] hover:text-[#3D7D4E] transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};




