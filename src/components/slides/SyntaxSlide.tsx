
import React from 'react';
import { Users, Code2 } from 'lucide-react';

export const SyntaxSlide: React.FC = () => {
  return (
    <div className="h-full flex flex-col p-6 max-w-7xl mx-auto overflow-y-auto">
      <h2 className="text-4xl font-bold text-center mb-6 text-white">Activity 3: Traversals</h2>
      
      {/* Defined Variables Section */}
      <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 mb-8 font-mono text-xl shadow-md">
        <p className="text-gray-400 mb-4">// Given the following data structures:</p>
        <div className="space-y-4">
            <p><span className="text-purple-400">String</span>[] <span className="text-yellow-400">playlistArray</span> = {'{'}<span className="text-green-400">"Song A"</span>, <span className="text-green-400">"Song B"</span>, <span className="text-green-400">"Song C"</span>{'}'};</p>
            <p><span className="text-purple-400">ArrayList</span>&lt;<span className="text-purple-400">String</span>&gt; <span className="text-yellow-400">playlistList</span> = <span className="text-purple-400">new</span> ArrayList&lt;&gt;(); <span className="text-gray-500">// Contains same songs</span></p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Group 1 & 4 */}
        <div className="bg-gray-800 rounded-2xl p-8 border-2 border-indigo-500/30 shadow-xl relative overflow-hidden group hover:border-indigo-500 transition-colors">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Code2 className="w-32 h-32 text-indigo-500" />
          </div>
          <div className="flex items-center space-x-3 mb-6">
            <Users className="w-8 h-8 text-indigo-400" />
            <h3 className="text-3xl font-bold text-white">Groups 1 & 4</h3>
          </div>
          <div className="space-y-4">
             <div className="bg-indigo-900/30 p-5 rounded-xl border border-indigo-500/20">
                <p className="text-sm text-indigo-300 uppercase font-bold mb-2 tracking-wider">Task</p>
                <p className="text-gray-100 text-2xl leading-relaxed">Write a <span className="font-mono text-yellow-400 font-bold">standard for-loop</span> to traverse:</p>
                <ul className="list-disc list-inside text-xl text-gray-300 mt-4 space-y-2">
                    <li><code className="bg-gray-900 px-2 py-1 rounded text-indigo-200">playlistArray</code></li>
                    <li><code className="bg-gray-900 px-2 py-1 rounded text-indigo-200">playlistList</code></li>
                </ul>
             </div>
          </div>
        </div>

        {/* Group 2 & 5 */}
        <div className="bg-gray-800 rounded-2xl p-8 border-2 border-emerald-500/30 shadow-xl relative overflow-hidden group hover:border-emerald-500 transition-colors">
           <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Code2 className="w-32 h-32 text-emerald-500" />
          </div>
          <div className="flex items-center space-x-3 mb-6">
            <Users className="w-8 h-8 text-emerald-400" />
            <h3 className="text-3xl font-bold text-white">Groups 2 & 5</h3>
          </div>
          <div className="space-y-4">
             <div className="bg-emerald-900/30 p-5 rounded-xl border border-emerald-500/20">
                <p className="text-sm text-emerald-300 uppercase font-bold mb-2 tracking-wider">Task</p>
                <p className="text-gray-100 text-2xl leading-relaxed">Write an <span className="font-mono text-yellow-400 font-bold">enhanced for-loop</span> to traverse:</p>
                <ul className="list-disc list-inside text-xl text-gray-300 mt-4 space-y-2">
                    <li><code className="bg-gray-900 px-2 py-1 rounded text-emerald-200">playlistArray</code></li>
                    <li><code className="bg-gray-900 px-2 py-1 rounded text-emerald-200">playlistList</code></li>
                </ul>
             </div>
          </div>
        </div>

         {/* Group 3 & 6 */}
         <div className="bg-gray-800 rounded-2xl p-8 border-2 border-purple-500/30 shadow-xl relative overflow-hidden group hover:border-purple-500 transition-colors">
           <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Code2 className="w-32 h-32 text-purple-500" />
          </div>
          <div className="flex items-center space-x-3 mb-6">
            <Users className="w-8 h-8 text-purple-400" />
            <h3 className="text-3xl font-bold text-white">Groups 3 & 6</h3>
          </div>
          <div className="space-y-4">
             <div className="bg-purple-900/30 p-5 rounded-xl border border-purple-500/20">
                <p className="text-sm text-purple-300 uppercase font-bold mb-2 tracking-wider">Task (Reinforcement)</p>
                <p className="text-gray-100 text-2xl leading-relaxed">Write an <span className="font-mono text-yellow-400 font-bold">enhanced for-loop</span> to traverse:</p>
                 <ul className="list-disc list-inside text-xl text-gray-300 mt-4 space-y-2">
                    <li><code className="bg-gray-900 px-2 py-1 rounded text-purple-200">playlistArray</code></li>
                    <li><code className="bg-gray-900 px-2 py-1 rounded text-purple-200">playlistList</code></li>
                </ul>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
