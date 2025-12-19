import React, { useState, useRef } from 'react';
import { Sparkles, Image as ImageIcon, MessageSquare, Edit, Upload, Send, BrainCircuit, X, Loader2 } from 'lucide-react';
import { analyzeImage, editImage, generateImage, askGeminiThinking, askGeminiFast } from '../services/geminiService';
import { GeminiMode } from '../types';

interface GeminiToolsProps {
  currentImageUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

const GeminiTools: React.FC<GeminiToolsProps> = ({ currentImageUrl, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<GeminiMode>(GeminiMode.ASK);
  const [input, setInput] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imageSize, setImageSize] = useState<"1K" | "2K" | "4K">("1K");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (!input && activeTab !== GeminiMode.ANALYZE) return;
    setIsLoading(true);
    setResult(null);

    try {
      let response = "";
      
      switch (activeTab) {
        case GeminiMode.ASK:
           // Use thinking model if keyword "detaylı" or "düşün" is present, else standard
           if (input.toLowerCase().includes('düşün') || input.toLowerCase().includes('açıkla')) {
             response = await askGeminiThinking(input);
           } else {
             response = await askGeminiFast(input);
           }
          break;
        case GeminiMode.ANALYZE:
          // Use uploaded image or current slide image
          const imgToAnalyze = uploadedImage || currentImageUrl;
          
          let base64 = imgToAnalyze;
          
          // If it's NOT a data URL (meaning it's a path like 'photos/1.jpg' or 'http...'), fetch it to get blob
          if (!imgToAnalyze.startsWith('data:')) {
             try {
               const data = await fetch(imgToAnalyze);
               const blob = await data.blob();
               base64 = await new Promise((resolve) => {
                 const reader = new FileReader();
                 reader.onloadend = () => resolve(reader.result as string);
                 reader.readAsDataURL(blob);
               }) as string;
             } catch (e) {
               console.error("Image fetch failed", e);
               setResult("Görsel yüklenemedi. Lütfen görselin erişilebilir olduğundan emin olun.");
               setIsLoading(false);
               return;
             }
          }
          
          // Strip header (data:image/jpeg;base64,...)
          const base64Data = (base64 as string).split(',')[1];
          response = await analyzeImage(base64Data, input || "Bu histolojik görüntüyü analiz et. Hangi dokular ve yapılar görünüyor?");
          break;

        case GeminiMode.EDIT:
           try {
             // For edit, we also need to fetch the current slide image if not base64
             const editResponse = await fetch(currentImageUrl);
             const editBlob = await editResponse.blob();
             const editBase64 = await new Promise((resolve) => {
                 const r = new FileReader();
                 r.onloadend = () => resolve(r.result as string);
                 r.readAsDataURL(editBlob);
             }) as string;
             
             const cleanBase64 = editBase64.split(',')[1];
             response = await editImage(cleanBase64, input);
             // Response for edit is an image URL
             setResult(response);
             setIsLoading(false);
             return; 
           } catch (e) {
             console.error("Edit fetch failed", e);
             setResult("Görsel düzenleme için hazırlanamadı.");
             setIsLoading(false);
             return;
           }

        case GeminiMode.GENERATE:
          response = await generateImage(input, imageSize);
          setResult(response);
          setIsLoading(false);
          return;
      }
      setResult(response);
    } catch (error) {
      console.error(error);
      setResult("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setIsLoading(false);
    }
  };

  const renderContent = () => {
    return (
      <div className="flex flex-col h-full overflow-y-auto">
        <div className="flex-1 p-4 space-y-4">
          {/* Analyze Upload */}
          {activeTab === GeminiMode.ANALYZE && (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50" onClick={() => fileInputRef.current?.click()}>
              {uploadedImage ? (
                <img src={uploadedImage} alt="Upload" className="h-32 mx-auto object-contain" />
              ) : (
                <div className="flex flex-col items-center text-gray-500">
                  <Upload className="w-8 h-8 mb-2" />
                  <span>Kendi fotoğrafını yükle veya mevcut slaytı analiz et</span>
                </div>
              )}
              <input type="file" ref={fileInputRef} onChange={handleFileUpload} className="hidden" accept="image/*" />
            </div>
          )}

          {/* Size Selector for Generate */}
          {activeTab === GeminiMode.GENERATE && (
             <div className="flex gap-2 justify-center mb-4">
               {(['1K', '2K', '4K'] as const).map(size => (
                 <button 
                   key={size}
                   onClick={() => setImageSize(size)}
                   className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${imageSize === size ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                 >
                   {size}
                 </button>
               ))}
             </div>
          )}

          {/* Result Display */}
          {result && (
            <div className="bg-white rounded-lg p-4 shadow-sm border border-indigo-100 animate-fade-in">
              <h4 className="text-xs font-bold text-indigo-500 uppercase tracking-wide mb-2">
                {activeTab === GeminiMode.GENERATE || activeTab === GeminiMode.EDIT ? 'Sonuç Görseli' : 'Gemini Yanıtı'}
              </h4>
              {activeTab === GeminiMode.GENERATE || activeTab === GeminiMode.EDIT ? (
                <img src={result} alt="Generated" className="w-full rounded-md" />
              ) : (
                <p className="text-gray-800 text-sm leading-relaxed whitespace-pre-wrap">{result}</p>
              )}
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-gray-50 border-t border-gray-200">
           <div className="relative">
             <input
               type="text"
               value={input}
               onChange={(e) => setInput(e.target.value)}
               placeholder={
                 activeTab === GeminiMode.ASK ? "Histoloji hakkında bir soru sor (Karmaşık sorular için 'Düşün' yaz)..." :
                 activeTab === GeminiMode.ANALYZE ? "Görsel hakkında ne bilmek istersin? (Boş bırakılabilir)" :
                 activeTab === GeminiMode.EDIT ? "Örn: 'Hücreleri daha mor yap' veya 'Arka planı temizle'" :
                 "Örn: '400x büyütmede sağlıklı bir karaciğer dokusu'"
               }
               className="w-full pl-4 pr-12 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all shadow-sm"
               onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
             />
             <button 
               onClick={handleSubmit} 
               disabled={isLoading}
               className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-colors"
             >
               {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
             </button>
           </div>
           {activeTab === GeminiMode.ASK && (
             <p className="text-[10px] text-gray-400 mt-2 text-center">Gemini 3 Pro Thinking Mode destekler.</p>
           )}
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl h-[600px] rounded-2xl shadow-2xl flex flex-col overflow-hidden relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10">
          <X className="w-6 h-6" />
        </button>

        {/* Header Tabs */}
        <div className="flex border-b border-gray-100 p-2 bg-gray-50/50 gap-1">
           <TabButton 
             active={activeTab === GeminiMode.ASK} 
             onClick={() => setActiveTab(GeminiMode.ASK)} 
             icon={<MessageSquare className="w-4 h-4" />} 
             label="Asistan" 
           />
           <TabButton 
             active={activeTab === GeminiMode.ANALYZE} 
             onClick={() => setActiveTab(GeminiMode.ANALYZE)} 
             icon={<BrainCircuit className="w-4 h-4" />} 
             label="Analiz Et" 
           />
           <TabButton 
             active={activeTab === GeminiMode.EDIT} 
             onClick={() => setActiveTab(GeminiMode.EDIT)} 
             icon={<Edit className="w-4 h-4" />} 
             label="Düzenle" 
           />
           <TabButton 
             active={activeTab === GeminiMode.GENERATE} 
             onClick={() => setActiveTab(GeminiMode.GENERATE)} 
             icon={<Sparkles className="w-4 h-4" />} 
             label="Oluştur" 
           />
        </div>

        {renderContent()}
      </div>
    </div>
  );
};

const TabButton: React.FC<{ active: boolean; onClick: () => void; icon: React.ReactNode; label: string }> = ({ active, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all flex-1 justify-center ${
      active 
        ? 'bg-white text-indigo-600 shadow-sm border border-gray-100' 
        : 'text-gray-500 hover:bg-gray-100'
    }`}
  >
    {icon}
    {label}
  </button>
);

export default GeminiTools;