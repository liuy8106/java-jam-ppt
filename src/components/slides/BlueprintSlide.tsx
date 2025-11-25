
import React, { useState } from 'react';
import { COMPARISON_ROWS } from '../../constants';
import { Check, X } from 'lucide-react';
import { Button } from '../Button';

export const BlueprintSlide: React.FC = () => {
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [feedback, setFeedback] = useState<Record<string, boolean | null>>({});

  const handleSelect = (rowId: string, type: 'Array' | 'ArrayList', value: string) => {
    const key = `${rowId}-${type}`;
    setUserAnswers(prev => ({ ...prev, [key]: value }));
    setFeedback(prev => ({ ...prev, [key]: null })); // Reset feedback on change
  };

  const checkAnswers = () => {
    const newFeedback: Record<string, boolean> = {};
    COMPARISON_ROWS.forEach(row => {
      const arrayKey = `${row.id}-Array`;
      const arrayListKey = `${row.id}-ArrayList`;
      
      newFeedback[arrayKey] = userAnswers[arrayKey] === row.arrayAnswer;
      newFeedback[arrayListKey] = userAnswers[arrayListKey] === row.arrayListAnswer;
    });
    setFeedback(newFeedback);
  };

  return (
    <div className="h-full flex flex-col p-6 max-w-7xl mx-auto overflow-y-auto">
      <h2 className="text-4xl font-bold text-center mb-4 text-white">Activity 1: Comparison</h2>
      <p className="text-center text-gray-300 mb-8 text-xl">Complete the table below in groups.</p>

      <div className="flex-1 bg-gray-800 rounded-xl border border-gray-700 shadow-xl overflow-hidden">
        <div className="grid grid-cols-12 bg-gray-900 border-b border-gray-700 text-xl font-bold text-gray-200">
          <div className="col-span-2 p-6 flex items-center">Feature</div>
          <div className="col-span-5 p-6 border-l border-gray-700 text-red-400 flex items-center justify-center">
             Array
          </div>
          <div className="col-span-5 p-6 border-l border-gray-700 text-cyan-400 flex items-center justify-center">
             ArrayList
          </div>
        </div>

        <div className="divide-y divide-gray-700">
          {COMPARISON_ROWS.map((row) => (
            <div key={row.id} className="grid grid-cols-12 hover:bg-gray-700/30 transition-colors">
              <div className="col-span-2 p-6 flex items-center text-lg font-medium text-gray-300 bg-gray-900/50">
                {row.feature}
              </div>
              
              {/* Array Column */}
              <div className="col-span-5 p-6 border-l border-gray-700 relative">
                <select 
                  className={`w-full p-4 rounded-lg bg-gray-800 border-2 text-xl font-mono ${
                    feedback[`${row.id}-Array`] === true ? 'border-green-500 text-green-400' : 
                    feedback[`${row.id}-Array`] === false ? 'border-red-500 text-red-400' : 'border-gray-600 text-white'
                  } focus:ring-2 focus:ring-indigo-500 outline-none appearance-none cursor-pointer`}
                  value={userAnswers[`${row.id}-Array`] || ''}
                  onChange={(e) => handleSelect(row.id, 'Array', e.target.value)}
                >
                  <option value="" disabled>Select Syntax...</option>
                  {row.options.map((opt, idx) => (
                    <option key={idx} value={opt}>{opt}</option>
                  ))}
                </select>
                {feedback[`${row.id}-Array`] === true && <Check className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 text-green-500 pointer-events-none" />}
                {feedback[`${row.id}-Array`] === false && <X className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 text-red-500 pointer-events-none" />}
              </div>

              {/* ArrayList Column */}
              <div className="col-span-5 p-6 border-l border-gray-700 relative">
                <select 
                  className={`w-full p-4 rounded-lg bg-gray-800 border-2 text-xl font-mono ${
                    feedback[`${row.id}-ArrayList`] === true ? 'border-green-500 text-green-400' : 
                    feedback[`${row.id}-ArrayList`] === false ? 'border-red-500 text-red-400' : 'border-gray-600 text-white'
                  } focus:ring-2 focus:ring-indigo-500 outline-none appearance-none cursor-pointer`}
                  value={userAnswers[`${row.id}-ArrayList`] || ''}
                  onChange={(e) => handleSelect(row.id, 'ArrayList', e.target.value)}
                >
                  <option value="" disabled>Select Syntax...</option>
                  {row.options.map((opt, idx) => (
                    <option key={idx} value={opt}>{opt}</option>
                  ))}
                </select>
                {feedback[`${row.id}-ArrayList`] === true && <Check className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 text-green-500 pointer-events-none" />}
                {feedback[`${row.id}-ArrayList`] === false && <X className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 text-red-500 pointer-events-none" />}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Button onClick={checkAnswers} size="lg" className="px-16 py-4 text-xl shadow-lg shadow-indigo-500/30">
          Check Specs
        </Button>
      </div>
    </div>
  );
};
