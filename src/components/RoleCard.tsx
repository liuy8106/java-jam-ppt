import React from 'react';
import type { TeamRole } from '../appTypes';
import { Keyboard, Map, Search, Megaphone } from 'lucide-react';

const icons: Record<string, React.ReactNode> = {
  keyboard: <Keyboard className="w-6 h-6" />,
  map: <Map className="w-6 h-6" />,
  search: <Search className="w-6 h-6" />,
  mega: <Megaphone className="w-6 h-6" />,
};

export const RoleCard: React.FC<{ role: TeamRole }> = ({ role }) => {
  return (
    <div className={`${role.color} p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 border border-white/10`}>
      <div className="flex items-center space-x-3 mb-2">
        <div className="bg-white/20 p-2 rounded-full text-white">
          {icons[role.icon] || <Search />}
        </div>
        <h3 className="font-bold text-lg text-white">{role.title}</h3>
      </div>
      <p className="text-white/90 text-sm leading-relaxed">
        {role.description}
      </p>
    </div>
  );
};