
import React from 'react';
import { Sparkles } from 'lucide-react';

export const TitleSlide: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8 animate-in zoom-in duration-500 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="text-center z-10 space-y-6">
        <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 tracking-tight leading-tight">
          Traversing ArrayList <br /> with Loops
        </h1>
        
        <div className="h-1 w-32 bg-gray-700 mx-auto rounded-full"></div>
        
        <div className="flex items-center justify-center space-x-3 text-gray-300 mt-12">
           <Sparkles className="w-5 h-5 text-yellow-500" />
           <p className="text-2xl font-mono tracking-widest uppercase font-bold text-white">APCSA NicolaLiu</p>
           <Sparkles className="w-5 h-5 text-yellow-500" />
        </div>
      </div>
    </div>
  );
};
