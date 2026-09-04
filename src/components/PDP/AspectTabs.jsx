import React from 'react';
import { aspectLabels } from '../../mockData/mockProducts';

export const AspectTabs = ({ activeAspect, onSelectAspect, aspectScores }) => {
  const tabs = [
    { id: 'all', name: 'All Reviews', icon: '💬' },
    ...aspectScores.map(asp => ({
      id: asp.aspect,
      name: aspectLabels[asp.aspect]?.name || asp.label,
      icon: aspectLabels[asp.aspect]?.icon || '⚡',
      score: asp.score
    }))
  ];

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
      {tabs.map((tab) => {
        const isActive = activeAspect === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onSelectAspect(tab.id)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold shrink-0 flex items-center gap-1.5 transition-all cursor-pointer ${
              isActive
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20 ring-1 ring-indigo-500'
                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-2xs'
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.name}</span>
            {tab.score && (
              <span className={`px-1.5 py-0.5 rounded text-[10px] ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-amber-600'}`}>
                {tab.score}★
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
