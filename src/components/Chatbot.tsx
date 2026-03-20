"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, Bot, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PHONE_DISPLAY } from '@/lib/contact';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Bonjour ! Je suis l\'assistant Biso Express. Comment puis-je vous aider aujourd\'hui ?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      let botText = `C'est noté ! Un membre de notre équipe va vous répondre très rapidement via WhatsApp pour finaliser votre livraison. Vous pouvez aussi nous appeler directement au ${PHONE_DISPLAY}.`;
      
      if (input.toLowerCase().includes('tarif') || input.toLowerCase().includes('prix')) {
        botText = "Nos tarifs dépendent de la distance et de la taille du colis. En général, c'est à partir de 1000 FCFA. Voulez-vous un devis précis ?";
      } else if (input.toLowerCase().includes('suivi') || input.toLowerCase().includes('où est')) {
        botText = "Pour suivre votre colis, merci de me donner votre numéro de commande ou le nom de l'expéditeur.";
      }

      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 md:bottom-8 md:right-8 w-16 h-16 bg-primary text-white rounded-full shadow-[0_10px_40px_rgba(255,122,0,0.4)] flex items-center justify-center z-[150] group"
      >
        {isOpen ? <X className="w-8 h-8" /> : <MessageSquare className="w-8 h-8 group-hover:rotate-12 transition-transform" />}
        {!isOpen && (
           <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            className="fixed bottom-24 right-4 left-4 md:left-auto md:bottom-28 md:right-8 w-auto md:w-96 h-[500px] bg-white rounded-[2rem] shadow-2xl border border-slate-100 flex flex-col z-[150] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary p-6 text-white text-center relative">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg">Assistant Biso</h3>
              <p className="text-white/70 text-xs">Nous répondons généralement instantanément</p>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/50 scroll-smooth"
            >
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm font-medium shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-primary text-white rounded-tr-none' 
                      : 'bg-white text-secondary rounded-tl-none border border-slate-100'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Réflexion...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-slate-100">
              <div className="relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Écrivez votre message..." 
                  className="w-full bg-slate-100 border-none rounded-2xl py-4 pl-6 pr-14 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="absolute right-2 top-2 w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center disabled:opacity-50 disabled:grayscale transition-all hover:scale-105 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[10px] text-center text-slate-400 mt-2 font-medium">
                Développé par Biso Express Engineering
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
