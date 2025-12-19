import React from 'react';
import { motion } from 'framer-motion';
import { Microscope } from 'lucide-react';

interface SlideViewerProps {
  imageUrl: string;
  magnification: string;
}

const SlideViewer: React.FC<SlideViewerProps> = ({ imageUrl, magnification }) => {
  return (
    <div className="relative h-full w-full bg-black overflow-hidden group">
      <motion.img
        key={imageUrl}
        src={imageUrl}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="h-full w-full object-cover"
        alt="Histoloji Slaytı"
      />
      
      {/* Decorative Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent pointer-events-none" />

      {/* SwiftUI-style Magnification Badge */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="absolute bottom-6 left-6 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl"
        style={{
          background: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
        }}
      >
        <div className="p-1.5 rounded-lg" style={{ background: 'rgba(10, 132, 255, 0.2)' }}>
          <Microscope className="w-4 h-4" style={{ color: '#64d2ff' }} />
        </div>
        <span className="text-white/90 font-medium text-sm tracking-wide">
          {magnification}
        </span>
      </motion.div>
    </div>
  );
};

export default SlideViewer;