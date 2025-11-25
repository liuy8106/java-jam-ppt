import React, { useState } from 'react';
import { SLIDES, ROLES } from './constants';
import { IntroSlide } from './components/slides/IntroSlide';
import { BlueprintSlide } from './components/slides/BlueprintSlide'; // Activity 1
import { ScenarioSlide } from './components/slides/ScenarioSlide'; // Activity 2
import { SyntaxSlide } from './components/slides/SyntaxSlide'; // Activity 3
import { AutoDJSlide } from './components/slides/AutoDJSlide'; // Activity 4
import { SeatingPlanSlide } from './components/slides/SeatingPlanSlide';
import { TitleSlide } from './components/slides/TitleSlide';
import { ExceptionSlide } from './components/slides/ExceptionSlide';
import { SummarySlide } from './components/slides/SummarySlide';
import { Timer } from './components/Timer';
import { Button } from './components/Button';
import { RoleCard } from './components/RoleCard';
import { ChevronRight, ChevronLeft, Users } from 'lucide-react';
import { SlideType } from './appTypes';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showRoles, setShowRoles] = useState(false);
  const [isTimerActive, setIsTimerActive] = useState(true);

  const currentSlide = SLIDES[currentSlideIndex];

  const handleNext = () => {
    if (currentSlideIndex < SLIDES.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
      setIsTimerActive(true); 
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  };

  const renderSlideContent = () => {
    switch (currentSlide.id) {
      case SlideType.SEATING: return <SeatingPlanSlide />;
      case SlideType.TITLE: return <TitleSlide />;
      case SlideType.INTRO: return <IntroSlide />;
      case SlideType.COMPARISON: return <BlueprintSlide />;
      case SlideType.MATCHING: return <ScenarioSlide />;
      case SlideType.GROUP_TASK: return <SyntaxSlide />;
      case SlideType.EXCEPTIONS: return <ExceptionSlide />;
      case SlideType.AUTO_DJ: return <AutoDJSlide />;
      case SlideType.SUMMARY: return <SummarySlide />;
      default: return <div>Unknown Slide</div>;
    }
  };

  return (
    <div className="flex flex-col w-screen h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Header */}
      <header className="h-16 border-b border-gray-800 flex items-center justify-between px-6 bg-gray-900/50 backdrop-blur-md sticky top-0 z-20 shrink-0">
        <div className="flex items-center space-x-4">
          <div className="bg-indigo-600 w-8 h-8 rounded-lg flex items-center justify-center font-bold">JJ</div>
          <h1 className="font-bold text-lg hidden md:block">JavaJam: ArrayList Adventure</h1>
        </div>
        
        {/* Progress Bar */}
        <div className="flex-1 mx-8 max-w-md hidden md:block">
           <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Start</span>
              <span>Finish</span>
           </div>
           <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
             <div 
                className="bg-indigo-500 h-full transition-all duration-500"
                style={{ width: `${((currentSlideIndex + 1) / SLIDES.length) * 100}%` }}
             />
           </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button 
            variant="secondary" 
            size="sm" 
            onClick={() => setShowRoles(!showRoles)}
            className="flex items-center space-x-2"
          >
            <Users className="w-4 h-4" />
            <span className="hidden sm:inline">Squad Roles</span>
          </Button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-hidden flex flex-col">
        {/* Role Overlay */}
        {showRoles && (
          <div className="absolute inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={() => setShowRoles(false)}>
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" onClick={e => e.stopPropagation()}>
              {ROLES.map(role => <RoleCard key={role.title} role={role} />)}
              <div className="lg:col-span-4 flex justify-center mt-4">
                <Button onClick={() => setShowRoles(false)}>Close</Button>
              </div>
            </div>
          </div>
        )}

        <div className="w-full h-full relative">
           {renderSlideContent()}
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="h-20 border-t border-gray-800 bg-gray-900 px-6 flex items-center justify-between z-10 shrink-0">
        <div className="flex items-center space-x-6">
           <Timer 
              seconds={currentSlide.durationSeconds} 
              isActive={isTimerActive} 
              onComplete={() => setIsTimerActive(false)} 
           />
           {currentSlide.durationSeconds > 0 && <div className="h-8 w-px bg-gray-700 hidden sm:block"></div>}
           <span className="text-gray-400 text-sm hidden sm:block">{currentSlide.title}</span>
        </div>

        <div className="flex items-center space-x-4">
          <Button 
            variant="secondary" 
            onClick={handlePrev} 
            disabled={currentSlideIndex === 0}
            className="w-12 h-12 rounded-full !p-0 flex items-center justify-center"
          >
            <ChevronLeft />
          </Button>
          <span className="text-gray-400 font-mono">
            {currentSlideIndex + 1} / {SLIDES.length}
          </span>
          <Button 
            variant="primary" 
            onClick={handleNext} 
            disabled={currentSlideIndex === SLIDES.length - 1}
            className="w-12 h-12 rounded-full !p-0 flex items-center justify-center shadow-[0_0_15px_rgba(79,70,229,0.5)]"
          >
            <ChevronRight />
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default App;