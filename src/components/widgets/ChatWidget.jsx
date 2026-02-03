import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Mascot } from '../shared/Mascot.jsx';

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-[350px] bg-[#F5F5F2] rounded-[24px] shadow-2xl overflow-hidden border border-[#3D7D4E]/10"
          >
            <div className="bg-[#3D7D4E] p-6 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-xl">
                  <Mascot className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-bold">Cacto Assistant</h4>
                  <p className="text-xs text-white/70">Trực tuyến</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-lg">
                <X size={20} />
              </button>
            </div>

            <div className="h-[300px] p-6 overflow-y-auto bg-pattern flex flex-col gap-4">
              <div className="bg-[#E8DCC3] p-4 rounded-2xl rounded-tl-none self-start max-w-[85%] text-[#5A4633] text-sm leading-relaxed">
                Chào bạn! Tôi là Cacto. Bạn muốn tìm hiểu thêm về dự án Cactiora?
              </div>
              <div className="bg-[#E8DCC3] p-4 rounded-2xl rounded-tl-none self-start max-w-[85%] text-[#5A4633] text-sm leading-relaxed">
                Tôi có thể hỗ trợ thông tin về vật liệu sinh học từ cây xương rồng của chúng tôi.
              </div>
            </div>

            <div className="p-4 bg-white border-t border-[#E8DCC3]">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Nhập câu hỏi..."
                  className="w-full pl-4 pr-12 py-3 bg-[#F5F5F2] border-none rounded-xl focus:ring-2 focus:ring-[#3D7D4E] text-sm"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-[#3D7D4E]">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-[#3D7D4E] rounded-full flex items-center justify-center text-white shadow-xl shadow-[#3D7D4E]/30"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </motion.button>
    </div>
  );
};




