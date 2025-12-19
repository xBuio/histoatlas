import React, { useState } from 'react';
import SlideViewer from './components/SlideViewer';
import InfoPanel from './components/InfoPanel';
import GeminiTools from './components/GeminiTools';
import { SLIDES } from './constants';

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGeminiOpen, setIsGeminiOpen] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const currentSlide = SLIDES[currentIndex];

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)'
    }}>
      
      {/* Left Panel - Image Viewer with glass border */}
      <div className="w-full md:w-1/2 h-[40vh] md:h-full relative z-0 p-3 md:p-4">
        <div className="h-full w-full rounded-3xl overflow-hidden" style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.1)'
        }}>
          <SlideViewer 
            imageUrl={currentSlide.imageUrl} 
            magnification={currentSlide.magnification} 
          />
        </div>
      </div>

      {/* Right Panel - Information with glass effect */}
      <div className="w-full md:w-1/2 h-[60vh] md:h-full relative z-10 p-3 md:p-4 md:pl-0">
        <div className="h-full w-full rounded-3xl overflow-hidden glass-dark" style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)'
        }}>
          <InfoPanel 
            data={currentSlide}
            currentIndex={currentIndex}
            totalSlides={SLIDES.length}
            onNext={handleNext}
            onPrev={handlePrev}
            onOpenGemini={() => setIsGeminiOpen(true)}
          />
        </div>
      </div>

      {/* Gemini AI Overlay */}
      <GeminiTools 
        isOpen={isGeminiOpen}
        onClose={() => setIsGeminiOpen(false)}
        currentImageUrl={currentSlide.imageUrl}
      />
    </div>
  );
};

export default App;