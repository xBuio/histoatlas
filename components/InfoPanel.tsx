import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, Lightbulb, StickyNote, ArrowRight, Sparkles, BookOpen, GraduationCap } from 'lucide-react';
import { SlideData } from '../types';

interface InfoPanelProps {
  data: SlideData;
  currentIndex: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onOpenGemini: () => void;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ 
  data, 
  currentIndex, 
  totalSlides, 
  onNext, 
  onPrev,
  onOpenGemini
}) => {
  return (
    <div className="h-full w-full flex flex-col overflow-hidden relative" style={{
      background: 'transparent'
    }}>
      
      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-8 pb-36">
        
        {/* Navigation Header */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-xs font-semibold tracking-widest" style={{ color: 'rgba(235, 235, 245, 0.6)' }}>
            SLIDE {currentIndex + 1} / {totalSlides}
          </span>
          <div className="flex gap-1">
            <button 
              onClick={onPrev}
              disabled={currentIndex === 0}
              className="p-2.5 rounded-xl transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
              style={{ 
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <ChevronLeft className="w-4 h-4" style={{ color: 'rgba(235, 235, 245, 0.8)' }} />
            </button>
            <button 
              onClick={onNext}
              disabled={currentIndex === totalSlides - 1}
              className="p-2.5 rounded-xl transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
              style={{ 
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <ChevronRight className="w-4 h-4" style={{ color: 'rgba(235, 235, 245, 0.8)' }} />
            </button>
          </div>
        </div>

        <AnimatePresence mode='wait'>
          <motion.div
            key={data.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-5"
          >
            {/* Title Section */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-2" style={{ color: '#ffffff' }}>
                {data.title}
              </h1>
              <h2 className="text-base font-medium italic mb-4" style={{ color: '#64d2ff' }}>
                {data.subtitle}
              </h2>
              <p className="leading-relaxed text-sm" style={{ color: 'rgba(235, 235, 245, 0.7)' }}>
                {data.description}
              </p>
            </div>

            {/* Quick Info Cards - Compact */}
            <div className="grid grid-cols-2 gap-2">
              {/* Location Badge */}
              <div className="p-3 rounded-xl" style={{
                background: 'rgba(10, 132, 255, 0.12)',
                border: '1px solid rgba(10, 132, 255, 0.2)'
              }}>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-3.5 h-3.5" style={{ color: '#0a84ff' }} />
                  <span className="font-semibold text-xs" style={{ color: '#64d2ff' }}>Konum</span>
                </div>
                <div className="space-y-1">
                  {data.locations.slice(0, 3).map((loc, idx) => (
                    <p key={idx} className="text-xs" style={{ color: 'rgba(100, 210, 255, 0.9)' }}>{loc}</p>
                  ))}
                </div>
              </div>

              {/* Magnification Badge */}
              <div className="p-3 rounded-xl" style={{
                background: 'rgba(48, 209, 88, 0.12)',
                border: '1px solid rgba(48, 209, 88, 0.2)'
              }}>
                <div className="flex items-center gap-2 mb-2">
                  <StickyNote className="w-3.5 h-3.5" style={{ color: '#30d158' }} />
                  <span className="font-semibold text-xs" style={{ color: '#30d158' }}>Büyütme</span>
                </div>
                <p className="text-lg font-bold" style={{ color: 'rgba(48, 209, 88, 0.9)' }}>{data.magnification}</p>
              </div>
            </div>

            {/* Diagnosis Tip Card */}
            <div className="p-4 rounded-2xl" style={{
              background: 'rgba(255, 159, 10, 0.12)',
              border: '1px solid rgba(255, 159, 10, 0.2)'
            }}>
              <div className="flex items-center gap-2.5 mb-2">
                <Lightbulb className="w-4 h-4" style={{ color: '#ff9f0a' }} />
                <span className="font-semibold text-sm" style={{ color: '#ffd60a' }}>Teşhis İpucu</span>
              </div>
              <p className="text-sm italic leading-relaxed" style={{ color: 'rgba(255, 214, 10, 0.85)' }}>
                {data.diagnosisTip}
              </p>
            </div>

            {/* Detailed Sections */}
            {data.sections && data.sections.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-1">
                  <BookOpen className="w-4 h-4" style={{ color: '#bf5af2' }} />
                  <span className="font-semibold text-sm" style={{ color: '#bf5af2' }}>Detaylı Konu Anlatımı</span>
                </div>
                
                {data.sections.map((section, idx) => (
                  <div key={idx} className="p-4 rounded-2xl" style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.06)'
                  }}>
                    <h4 className="font-semibold text-sm mb-2" style={{ color: 'rgba(235, 235, 245, 0.95)' }}>
                      {section.title}
                    </h4>
                    <p className="text-sm leading-relaxed mb-2" style={{ color: 'rgba(235, 235, 245, 0.6)' }}>
                      {section.content}
                    </p>
                    {section.bulletPoints && section.bulletPoints.length > 0 && (
                      <ul className="space-y-1.5 mt-2">
                        {section.bulletPoints.map((point, pointIdx) => (
                          <li key={pointIdx} className="flex items-start gap-2 text-sm" style={{ color: 'rgba(235, 235, 245, 0.7)' }}>
                            <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#bf5af2' }} />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Professor Note Card */}
            {data.professorNote && (
              <div className="p-4 rounded-2xl" style={{
                background: 'rgba(255, 45, 85, 0.1)',
                border: '1px solid rgba(255, 45, 85, 0.2)'
              }}>
                <div className="flex items-center gap-2.5 mb-2">
                  <GraduationCap className="w-4 h-4" style={{ color: '#ff2d55' }} />
                  <span className="font-semibold text-sm" style={{ color: '#ff2d55' }}>Profesörün Notu</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255, 45, 85, 0.85)' }}>
                  {data.professorNote}
                </p>
              </div>
            )}

            {/* Microscope Note Card */}
            <div className="p-4 rounded-2xl" style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <div className="flex items-center gap-2.5 mb-2">
                <StickyNote className="w-4 h-4" style={{ color: 'rgba(235, 235, 245, 0.6)' }} />
                <span className="font-semibold text-sm" style={{ color: 'rgba(235, 235, 245, 0.9)' }}>Mikroskop Notu</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(235, 235, 245, 0.6)' }}>
                {data.microscopeNote}
              </p>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Sticky Bottom Area - SwiftUI Style */}
      <div className="absolute bottom-0 left-0 right-0 p-5" style={{
        background: 'linear-gradient(to top, rgba(28, 28, 30, 0.98) 0%, rgba(28, 28, 30, 0.9) 60%, transparent 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)'
      }}>
        <div className="flex flex-col gap-2.5">
          
          {/* Gemini AI Button */}
          <button
             onClick={onOpenGemini}
             className="w-full py-3 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 text-sm"
             style={{
               background: 'rgba(191, 90, 242, 0.15)',
               border: '1px solid rgba(191, 90, 242, 0.3)',
               color: '#bf5af2'
             }}
          >
            <Sparkles className="w-4 h-4" />
            Yapay Zeka Asistanı
          </button>

          {/* Next Slide Button */}
          <button 
            onClick={onNext}
            className="w-full py-3.5 rounded-xl font-semibold transition-all duration-200 transform active:scale-[0.98] flex items-center justify-center gap-2 group"
            style={{
              background: 'linear-gradient(135deg, #0a84ff 0%, #5856d6 100%)',
              boxShadow: '0 4px 15px rgba(10, 132, 255, 0.4)',
              color: '#ffffff'
            }}
          >
            <span>
              {currentIndex === totalSlides - 1 ? 'Başa Dön' : 'Sıradaki Preparat'}
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

    </div>
  );
};

export default InfoPanel;