
import React from 'react';
import { Disc, Music, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const IntroSlide: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-12 animate-in fade-in duration-700 p-8">
      <div className="text-center space-y-4 max-w-4xl">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Why do we need ArrayList?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
        {/* Legacy System */}
        <div className="bg-gray-800 rounded-2xl border-2 border-red-500/30 p-8 flex flex-col items-center text-center shadow-xl transform transition-transform hover:scale-105">
          <div className="bg-red-900/30 p-6 rounded-full mb-6">
            <Disc className="w-20 h-20 text-red-400" />
          </div>
          <h3 className="text-3xl font-bold text-red-400 mb-4">The CD Rack (Array)</h3>
          <ul className="text-xl text-gray-300 space-y-4 text-left w-full px-8">
            <li className="flex items-center">
              <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" />
              <span>Fixed Size (Capacity)</span>
            </li>
            <li className="flex items-center">
              <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" />
              <span>Hard to add new songs</span>
            </li>
            <li className="flex items-center">
              <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" />
              <span>Wasteful if empty</span>
            </li>
          </ul>
        </div>

        {/* Modern System */}
        <div className="bg-gray-800 rounded-2xl border-2 border-green-500/30 p-8 flex flex-col items-center text-center shadow-xl transform transition-transform hover:scale-105">
           <div className="bg-green-900/30 p-6 rounded-full mb-6">
            <Music className="w-20 h-20 text-green-400" />
          </div>
          <h3 className="text-3xl font-bold text-green-400 mb-4">The Playlist (ArrayList)</h3>
          <ul className="text-xl text-gray-300 space-y-4 text-left w-full px-8">
            <li className="flex items-center">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
              <span>Dynamic Size (Grows/Shrinks)</span>
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
              <span>Easy to Add/Remove</span>
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
              <span>Flexible Storage</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
