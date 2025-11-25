
import React from 'react';
import { AlertTriangle, ShieldAlert } from 'lucide-react';

export const ExceptionSlide: React.FC = () => {
  return (
    <div className="h-full flex flex-col p-8 max-w-7xl mx-auto items-center justify-center">
      <h2 className="text-5xl font-bold text-center mb-16 text-white">Common Traversal Exceptions</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full">
        
        {/* Index Out of Bounds */}
        <div className="bg-red-900/10 border-2 border-red-500 rounded-3xl p-10 relative overflow-hidden group hover:bg-red-900/20 transition-all shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-20">
             <ShieldAlert className="w-40 h-40 text-red-500" />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center space-x-4 mb-8">
                <div className="bg-red-500/20 p-4 rounded-full">
                    <AlertTriangle className="w-10 h-10 text-red-500" />
                </div>
                <h3 className="text-3xl font-bold text-red-400">IndexOutOfBoundsException</h3>
            </div>
            
            <p className="text-gray-200 mb-6 text-2xl font-medium">
                Occurs when accessing an index that doesn't exist.
            </p>
            
            <div className="bg-black/40 p-6 rounded-xl font-mono text-xl border-l-8 border-red-500 shadow-inner">
                <p className="text-gray-400 mb-2">// Valid indices: 0 to size()-1</p>
                <p className="text-white">
                    list.get(<span className="text-red-400 font-bold">list.size()</span>); <span className="text-red-400 font-bold ml-2">&lt;-- ERROR!</span>
                </p>
            </div>
          </div>
        </div>

        {/* Concurrent Modification */}
        <div className="bg-orange-900/10 border-2 border-orange-500 rounded-3xl p-10 relative overflow-hidden group hover:bg-orange-900/20 transition-all shadow-2xl">
           <div className="absolute top-0 right-0 p-8 opacity-20">
             <ShieldAlert className="w-40 h-40 text-orange-500" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center space-x-4 mb-8">
                 <div className="bg-orange-500/20 p-4 rounded-full">
                    <AlertTriangle className="w-10 h-10 text-orange-500" />
                </div>
                <h3 className="text-3xl font-bold text-orange-400">ConcurrentModificationException</h3>
            </div>
            
            <p className="text-gray-200 mb-6 text-2xl font-medium">
                Occurs when adding/removing elements inside a <span className="font-bold text-white bg-orange-500/20 px-2 rounded">for-each</span> loop.
            </p>
            
            <div className="bg-black/40 p-6 rounded-xl font-mono text-xl border-l-8 border-orange-500 shadow-inner">
                 <p className="text-purple-400">for <span className="text-white">(String s : list)</span> {'{'}</p>
                 <p className="pl-6 text-white">if (s.equals("Bad")) {'{'}</p>
                 <p className="pl-12 text-white">list.remove(s); <span className="text-orange-400 font-bold ml-2">&lt;-- ERROR!</span></p>
                 <p className="pl-6 text-white">{'}'}</p>
                 <p className="text-white">{'}'}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
