import React from 'react';

export const Header = () => {
  const navItems = [
    { name: 'Về dự án', href: '#about' },
    { name: 'Lợi ích', href: '#benefits' },
    { name: 'Quy trình', href: '#process' },
    { name: 'Ứng dụng', href: '#gallery' },
    { name: 'Bền vững', href: '#sustainability' },
    { name: 'Liên hệ', href: '#contact' },
  ];

  return (
    <header className="w-full px-6 py-8 bg-transparent">
      <div className="max-w-[1320px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center bg-[#3D7D4E] rounded-full">
            {/* Heart shaped cactus leaf logo */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21C12 21 4 16.5 4 10C4 6.5 6.5 4 9 4C10.5 4 11.5 4.5 12 5.5C12.5 4.5 13.5 4 15 4C17.5 4 20 6.5 20 10C20 16.5 12 21 12 21Z" fill="#F5F5F2"/>
              <circle cx="12" cy="11" r="2" fill="#3D7D4E" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-[#5A4633]">CACTORA</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
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




