import React, { useEffect } from 'react';
import { Clock } from 'lucide-react';

interface TimerProps {
  seconds: number;
  isActive: boolean;
  onComplete: () => void;
}

export const Timer: React.FC<TimerProps> = ({ seconds, isActive, onComplete }) => {
  const [timeLeft, setTimeLeft] = React.useState(seconds);

  useEffect(() => {
    setTimeLeft(seconds);
  }, [seconds]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    // Only run timer if seconds > 0
    if (isActive && timeLeft > 0 && seconds > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            onComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, onComplete, seconds]);

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  if (seconds === 0) {
    return null;
  }

  return (
    <div className={`flex items-center space-x-2 font-mono text-xl ${timeLeft < 30 ? 'text-red-400 animate-pulse' : 'text-cyan-400'}`}>
      <Clock className="w-5 h-5" />
      <span>{formatTime(timeLeft)}</span>
    </div>
  );
};