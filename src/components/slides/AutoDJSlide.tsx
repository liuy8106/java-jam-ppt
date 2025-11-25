
import React from 'react';

export const AutoDJSlide: React.FC = () => {
  return (
    <div className="h-full flex flex-col p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold text-white">Activity 4: Programming Challenge</h2>
        <div className="bg-gray-800 px-6 py-3 rounded-xl border border-gray-700">
            <span className="text-gray-400 text-lg block">Objective</span>
            <span className="text-white font-mono text-xl">Count songs &lt; 3.0 mins</span>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Role Instructions */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-blue-900/20 p-5 rounded-xl border border-blue-800 shadow-md">
             <h4 className="font-bold text-blue-400 mb-2 text-xl">⌨️ Driver</h4>
             <p className="text-lg text-gray-300">Controls the mouse/keyboard.</p>
          </div>
          <div className="bg-green-900/20 p-5 rounded-xl border border-green-800 shadow-md">
             <h4 className="font-bold text-green-400 mb-2 text-xl">🗺️ Navigator</h4>
             <p className="text-lg text-gray-300">Guides logic (Loop bounds, Access methods).</p>
          </div>
          <div className="bg-purple-900/20 p-5 rounded-xl border border-purple-800 shadow-md">
             <h4 className="font-bold text-purple-400 mb-2 text-xl">🔍 Analyst</h4>
             <p className="text-lg text-gray-300">Checks edge cases & nulls.</p>
          </div>
          <div className="bg-orange-900/20 p-5 rounded-xl border border-orange-800 shadow-md">
             <h4 className="font-bold text-orange-400 mb-2 text-xl">📢 Spokesperson</h4>
             <p className="text-lg text-gray-300">Explains the solution to class.</p>
          </div>
        </div>

        {/* Right: Code Editor (Fill in the blank style) */}
        <div className="lg:col-span-2 bg-gray-900 rounded-2xl border-2 border-gray-700 shadow-2xl flex flex-col overflow-hidden">
          <div className="bg-gray-800 px-6 py-4 border-b border-gray-700 flex items-center space-x-3">
            <div className="w-4 h-4 rounded-full bg-red-500"></div>
            <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
            <span className="ml-4 text-base text-gray-400 font-mono">AutoDJ.java</span>
          </div>

          <div className="p-8 font-mono text-2xl text-gray-300 overflow-auto flex-1 leading-relaxed">
            <div className="mb-6">
                <span className="text-purple-400">import</span> java.util.ArrayList;
            </div>
            
            <div className="mb-6">
                <span className="text-purple-400">public int</span> countShortSongs(ArrayList&lt;<span className="text-yellow-400">Double</span>&gt; songDurations) {'{'}
            </div>
            
            {/* The Challenge Area */}
            <div className="pl-8 space-y-10 opacity-90">
                 {/* Student Work Area */}
                 <div className="w-full h-16 bg-gray-800/50 border-b-2 border-gray-600 rounded flex items-center px-4 text-gray-500 italic">
                    // Step 1: Initialize counter
                 </div>
                 
                 <div className="w-full h-16 bg-gray-800/50 border-b-2 border-gray-600 rounded flex items-center px-4 text-gray-500 italic">
                    // Step 2: Loop through ArrayList
                 </div>

                 <div className="w-full h-16 bg-gray-800/50 border-b-2 border-gray-600 rounded flex items-center px-4 text-gray-500 italic">
                    // Step 3: Check if song &lt; 3.0
                 </div>
                 
                 <div className="w-full h-16 bg-gray-800/50 border-b-2 border-gray-600 rounded flex items-center px-4 text-gray-500 italic">
                    // Step 4: Increment counter
                 </div>
            </div>

            <div className="pl-8 mt-10">
                 <span className="text-purple-400">return</span> count;
            </div>
            <div className="mt-4">
                {'}'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
