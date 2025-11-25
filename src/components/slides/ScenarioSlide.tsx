
import React, { useState } from 'react';
import { MATCHING_SCENARIOS } from '../../constants';
import { Button } from '../Button';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

export const ScenarioSlide: React.FC = () => {
  const [selections, setSelections] = useState<Record<string, 'Array' | 'ArrayList' | null>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (id: string, type: 'Array' | 'ArrayList') => {
    if (submitted) return;
    setSelections(prev => ({ ...prev, [id]: type }));
  };

  const checkAnswers = () => {
    setSubmitted(true);
  };

  const reset = () => {
    setSelections({});
    setSubmitted(false);
  };

  return (
    <div className="h-full flex flex-col items-center justify-center p-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4 text-white">Activity 2: Choose appropriate data structure</h2>
      <p className="text-center text-gray-300 mb-12 text-2xl">Match each real-world scenario to the correct data structure.</p>

      <div className="w-full space-y-8">
        {MATCHING_SCENARIOS.map((scenario) => {
          const currentSelection = selections[scenario.id];
          const isCorrect = submitted && currentSelection === scenario.correctType;
          const isWrong = submitted && currentSelection !== scenario.correctType;

          return (
            <div key={scenario.id} className="bg-gray-800 rounded-2xl p-8 border-2 border-gray-700 flex flex-col md:flex-row items-center justify-between gap-8 transition-all hover:border-gray-500">
              <div className="flex-1">
                <p className="text-3xl font-medium text-white leading-relaxed">{scenario.text}</p>
              </div>

              <div className="hidden md:block text-gray-500">
                <ArrowRight className="w-10 h-10" />
              </div>

              <div className="flex items-center space-x-6 min-w-[400px] justify-end">
                <button
                  onClick={() => handleSelect(scenario.id, 'Array')}
                  disabled={submitted}
                  className={`px-8 py-4 rounded-xl font-bold text-2xl border-4 transition-all ${
                    currentSelection === 'Array'
                      ? 'bg-red-900/50 border-red-500 text-white shadow-[0_0_15px_rgba(239,68,68,0.5)]'
                      : 'bg-gray-900 border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white'
                  } ${submitted && scenario.correctType === 'Array' ? '!border-green-500 !text-green-400' : ''}`}
                >
                  Array
                </button>

                <button
                  onClick={() => handleSelect(scenario.id, 'ArrayList')}
                  disabled={submitted}
                  className={`px-8 py-4 rounded-xl font-bold text-2xl border-4 transition-all ${
                    currentSelection === 'ArrayList'
                      ? 'bg-cyan-900/50 border-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.5)]'
                      : 'bg-gray-900 border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white'
                  } ${submitted && scenario.correctType === 'ArrayList' ? '!border-green-500 !text-green-400' : ''}`}
                >
                  ArrayList
                </button>
                
                <div className="w-12 flex items-center justify-center">
                    {isCorrect && <CheckCircle2 className="w-10 h-10 text-green-500 animate-in zoom-in" />}
                    {isWrong && <XCircle className="w-10 h-10 text-red-500 animate-in zoom-in" />}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-16 flex space-x-6">
        {!submitted ? (
             <Button onClick={checkAnswers} size="lg" className="px-12 py-4 text-2xl" disabled={Object.keys(selections).length < MATCHING_SCENARIOS.length}>
                Check Connections
             </Button>
        ) : (
            <Button onClick={reset} variant="secondary" size="lg" className="px-12 py-4 text-2xl">
                Try Again
            </Button>
        )}
      </div>
    </div>
  );
};
