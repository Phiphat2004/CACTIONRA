import React from 'react';
import { motion } from 'motion/react';

export const Mascot = ({ className = "w-12 h-12" }) => {
  return (
    <motion.div 
      className={`relative ${className}`}
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Simple "Cacto" Mascot */}
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="35" y="30" width="30" height="50" rx="15" fill="#3D7D4E" />
        <rect x="20" y="45" width="20" height="15" rx="7.5" fill="#3D7D4E" />
        <rect x="60" y="40" width="20" height="15" rx="7.5" fill="#3D7D4E" />
        <circle cx="43" cy="45" r="2.5" fill="white" />
        <circle cx="57" cy="45" r="2.5" fill="white" />
        <path d="M45 55C45 55 48 58 50 58C52 58 55 55 55 55" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M35 35L30 30M65 35L70 30M35 55L30 60M65 55L70 60" stroke="#74C27B" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
};




