
import React from 'react';

export const SummarySlide: React.FC = () => {
  return (
    <div className="h-full flex flex-col p-6 max-w-7xl mx-auto overflow-y-auto">
      <h2 className="text-4xl font-bold text-center mb-8 text-white">Summary: Traversing ArrayList with Loops</h2>
      
      {/* Definition Block */}
      <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 mb-10 font-mono text-2xl shadow-md">
         <p className="text-gray-400 mb-2">// Setup</p>
         <p className="mb-2"><span className="text-purple-400">ArrayList</span>&lt;<span className="text-purple-400">String</span>&gt; list = <span className="text-purple-400">new</span> ArrayList&lt;&gt;();</p>
         <p>list.add(<span className="text-green-400">"A"</span>); list.add(<span className="text-green-400">"B"</span>);</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Standard For Loop */}
        <div className="bg-gray-800 rounded-2xl border border-blue-500/30 overflow-hidden shadow-lg flex flex-col">
          <div className="bg-blue-900/20 px-6 py-4 border-b border-blue-500/20">
            <h3 className="text-2xl font-bold text-blue-300">1. Standard For-Loop</h3>
            <p className="text-lg text-gray-300 mt-1">Best for: Accessing by index or modifying elements</p>
          </div>
          <div className="p-8 font-mono text-xl overflow-x-auto bg-gray-900/50 flex-1">
<pre className="text-gray-300 leading-relaxed whitespace-pre">
{`for (int i = 0; i < list.size(); i++) {
    String song = list.get(i);
    System.out.println(song);
}`}
</pre>
          </div>
        </div>

        {/* Enhanced For-Each Loop */}
        <div className="bg-gray-800 rounded-2xl border border-green-500/30 overflow-hidden shadow-lg flex flex-col">
          <div className="bg-green-900/20 px-6 py-4 border-b border-green-500/20">
            <h3 className="text-2xl font-bold text-green-300">2. Enhanced For-Each Loop</h3>
            <p className="text-lg text-gray-300 mt-1">Best for: Read-only traversal, cleaner syntax</p>
          </div>
          <div className="p-8 font-mono text-xl overflow-x-auto bg-gray-900/50 flex-1">
<pre className="text-gray-300 leading-relaxed whitespace-pre">
{`for (String song : list) {
    System.out.println(song);
}`}
</pre>
          </div>
        </div>

        {/* While Loop */}
        <div className="bg-gray-800 rounded-2xl border border-yellow-500/30 overflow-hidden shadow-lg flex flex-col">
          <div className="bg-yellow-900/20 px-6 py-4 border-b border-yellow-500/20">
            <h3 className="text-2xl font-bold text-yellow-300">3. While Loop</h3>
            <p className="text-lg text-gray-300 mt-1">Best for: Complex conditions</p>
          </div>
          <div className="p-8 font-mono text-xl overflow-x-auto bg-gray-900/50 flex-1">
<pre className="text-gray-300 leading-relaxed whitespace-pre">
{`int i = 0;
while (i < list.size()) {
    String s = list.get(i);
    System.out.println(s);
    i++;
}`}
</pre>
          </div>
        </div>

        {/* Key Reminders */}
        <div className="bg-gray-800 rounded-2xl border border-red-500/30 overflow-hidden flex flex-col justify-center shadow-lg">
           <div className="p-8 space-y-6">
             <h3 className="font-bold text-red-300 text-3xl border-b border-red-500/20 pb-4 mb-2">Common Pitfalls</h3>
             <ul className="space-y-6">
               <li className="flex items-start">
                 <div className="bg-red-900/50 p-2 rounded mr-4 mt-1 flex-shrink-0">
                    <span className="text-red-400 font-bold text-xl px-1">!</span>
                 </div>
                 <span className="text-gray-300 text-2xl pt-0.5 leading-snug">
                    <strong>Syntax:</strong> Use <code className="bg-gray-900 px-2 py-1 rounded text-red-300">.size()</code> and <code className="bg-gray-900 px-2 py-1 rounded text-red-300">.get(i)</code>
                 </span>
               </li>
               <li className="flex items-start">
                 <div className="bg-red-900/50 p-2 rounded mr-4 mt-1 flex-shrink-0">
                    <span className="text-red-400 font-bold text-xl px-1">!</span>
                 </div>
                 <span className="text-gray-300 text-2xl pt-0.5 leading-snug">
                    <strong>Bounds:</strong> Last index is always <code className="text-cyan-400">size() - 1</code>.
                 </span>
               </li>
             </ul>
           </div>
        </div>

      </div>
    </div>
  );
};
