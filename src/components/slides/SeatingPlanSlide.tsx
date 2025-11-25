
import React from 'react';

export const SeatingPlanSlide: React.FC = () => {
  // Data structure reflecting the provided image
  const leftGroups = [
    {
      id: "Group3",
      color: "bg-red-200 text-red-900",
      rows: [
        ["张荣博", ""],
        ["党梓桐", "赵悦同"]
      ]
    },
    {
      id: "Group2",
      color: "bg-orange-100 text-orange-900",
      rows: [
        ["赵子毅", "刘芮希"],
        ["李乐成", "董思涵"]
      ]
    },
    {
      id: "Group1",
      color: "bg-yellow-100 text-yellow-900",
      rows: [
        ["荆以珊", "戚栋"],
        ["田宇哲", "丁泽源"]
      ]
    }
  ];

  const rightGroups = [
    {
      id: "Group6",
      color: "bg-gray-100 text-gray-900",
      rows: [
        ["", "张云翔"],
        ["邵梓卿", "王钰希"]
      ]
    },
    {
      id: "Group5",
      color: "bg-red-100 text-red-900",
      rows: [
        ["刘子瞳", "柏昀杉"],
        ["苏子伊", "刘艺帆"]
      ]
    },
    {
      id: "Group4",
      color: "bg-orange-50 text-orange-900",
      rows: [
        ["韩特睿", "刘惟恩"],
        ["管晨好", "强鑫棋"]
      ]
    }
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center p-4 bg-white text-black">
      <h2 className="text-5xl font-bold mb-8 text-black">Seating Plan</h2>
      
      <div className="w-full max-w-6xl flex justify-center">
        <div className="grid grid-cols-[auto_1fr_1fr_auto] gap-4 w-full text-2xl">
          
          {/* Left Labels */}
          <div className="flex flex-col justify-around font-bold text-xl space-y-2">
            <div className="flex items-center h-32">Group3</div>
            <div className="flex items-center h-32">Group2</div>
            <div className="flex items-center h-32">Group1</div>
          </div>

          {/* Left Column Data */}
          <div className="flex flex-col border-2 border-orange-300">
            {leftGroups.map((group, idx) => (
              <div key={idx} className={`flex-1 ${group.color} flex flex-col justify-center border-b border-orange-300 last:border-b-0`}>
                {group.rows.map((row, rIdx) => (
                  <div key={rIdx} className="flex border-b border-orange-300/50 last:border-0 h-16">
                    <div className="flex-1 flex items-center pl-4 border-r border-orange-300/50">{row[0]}</div>
                    <div className="flex-1 flex items-center pl-4">{row[1]}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Right Column Data */}
          <div className="flex flex-col border-2 border-orange-300">
            {rightGroups.map((group, idx) => (
              <div key={idx} className={`flex-1 ${group.color} flex flex-col justify-center border-b border-orange-300 last:border-b-0`}>
                {group.rows.map((row, rIdx) => (
                  <div key={rIdx} className="flex border-b border-orange-300/50 last:border-0 h-16">
                    <div className="flex-1 flex items-center pl-4 border-r border-orange-300/50">{row[0]}</div>
                    <div className="flex-1 flex items-center pl-4">{row[1]}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>

           {/* Right Labels */}
           <div className="flex flex-col justify-around font-bold text-xl space-y-2">
            <div className="flex items-center h-32">Group6</div>
            <div className="flex items-center h-32">Group5</div>
            <div className="flex items-center h-32">Group4</div>
          </div>

        </div>
      </div>
    </div>
  );
};
