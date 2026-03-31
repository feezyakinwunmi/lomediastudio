// components/FloatingWhatsApp.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MessageCircle, X, Send, Minimize2, Maximize2 } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // WhatsApp number - replace with your actual WhatsApp number (country code + number, no + or spaces)
  const whatsappNumber = "2348012345678"; // Nigeria format: 2348012345678
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  // Auto-hide tooltip after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = () => {
    if (message.trim()) {
      const encodedMessage = encodeURIComponent(message);
      window.open(`${whatsappLink}?text=${encodedMessage}`, '_blank');
      setMessage('');
      setIsOpen(false);
    } else {
      window.open(whatsappLink, '_blank');
    }
  };

  const handleQuickMessage = (text: string) => {
    const encodedMessage = encodeURIComponent(text);
    window.open(`${whatsappLink}?text=${encodedMessage}`, '_blank');
    setIsOpen(false);
  };

  const quickMessages = [
    "Hi! I'd like to inquire about your services.",
    "I need a quote for a project.",
    "I have a question about Web Creation.",
    "I'd like to book a recording session.",
  ];

  return (
    <>
      {/* Floating Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: isVisible ? 1 : 0,
          opacity: isVisible ? 1 : 0,
          y: 0 
        }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 right-6 z-50"
      >
        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              className="absolute bottom-16 right-0 mb-2 w-48"
            >
              <div className="bg-gray-900 text-white text-xs rounded-lg py-2 px-3 shadow-lg relative">
                Need help? Chat with us!
                <div className="absolute bottom-0 right-4 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
            isOpen 
              ? 'bg-gray-900 hover:bg-gray-800' 
              : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600'
          }`}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-7 h-7 text-white" />
          )}
          
          {/* Pulse Animation */}
          {!isOpen && (
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full bg-green-500/50"
            />
          )}
        </motion.button>

        {/* Chat Window */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-20 right-0 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm">WhatsApp Support</h3>
                    <p className="text-white/80 text-xs">Usually replies within minutes</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              {!isMinimized && (
                <div className="p-4">
                  {/* Status */}
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs text-gray-500">Online - We're here to help!</span>
                  </div>

                  {/* Welcome Message */}
                  <div className="mb-4">
                    <div className="bg-gray-100 rounded-2xl rounded-tl-none p-3 max-w-[85%]">
                      <p className="text-sm text-gray-700">
                        👋 Hi there! Welcome to LomeMediaStudio. How can we help you today?
                      </p>
                    </div>
                  </div>

                  {/* Quick Messages */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">Quick replies:</p>
                    <div className="flex flex-wrap gap-2">
                      {quickMessages.map((msg, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleQuickMessage(msg)}
                          className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full transition-colors"
                        >
                          {msg.length > 30 ? msg.substring(0, 30) + '...' : msg}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="flex gap-2 mt-2">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-green-500 transition-colors"
                    />
                    <button
                      onClick={handleSendMessage}
                      className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Send className="w-4 h-4 text-white" />
                    </button>
                  </div>

                  {/* Footer Note */}
                  <p className="text-xs text-gray-400 text-center mt-4">
                    Click to chat on WhatsApp. Message and data rates may apply.
                  </p>
                </div>
              )}

              {/* Minimized State */}
              {isMinimized && (
                <div className="p-4 text-center">
                  <p className="text-sm text-gray-600">Click to expand and chat with us</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}