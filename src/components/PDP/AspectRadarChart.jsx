import React, { useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { BarChart3, PieChart } from 'lucide-react';
import { aspectLabels } from '../../mockData/mockProducts';

export const AspectRadarChart = ({ aspectScores, activeAspect, onSelectAspect }) => {
  const [viewMode, setViewMode] = useState('radar'); // 'radar' | 'bars'

  // Safely normalize aspectScores regardless of whether it's an Array or an Object
  const safeScores = Array.isArray(aspectScores) && aspectScores.length > 0
    ? aspectScores.map(a => typeof a === 'string' ? { aspect: a, score: 4.5, count: 50 } : a)
    : aspectScores && typeof aspectScores === 'object' && Object.keys(aspectScores).length > 0
    ? Object.entries(aspectScores).map(([key, val]) => ({
        aspect: key.toLowerCase().includes('sound') ? 'sound' 
              : key.toLowerCase().includes('battery') ? 'battery' 
              : key.toLowerCase().includes('build') ? 'build' 
              : 'price',
        label: key,
        score: typeof val === 'number' ? (val > 5 ? Number((val / 20).toFixed(1)) : val) : 4.5,
        count: 85
      }))
    : [
        { aspect: 'sound', label: 'Sound / Quality', score: 4.8, count: 120 },
        { aspect: 'battery', label: 'Battery Life', score: 4.6, count: 95 },
        { aspect: 'build', label: 'Build & Ergonomics', score: 4.7, count: 110 },
        { aspect: 'price', label: 'Value for Money', score: 4.4, count: 80 }
      ];

  const chartData = safeScores.map((asp) => ({
    aspectKey: asp.aspect || 'aspect',
    label: aspectLabels[asp.aspect]?.name || asp.label || asp.aspect || 'Aspect',
    score: typeof asp.score === 'number' ? (asp.score > 5 ? Number((asp.score / 20).toFixed(1)) : asp.score) : 4.5,
    count: asp.count || 50,
    fullMark: 5.0
  }));

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
      {/* Header & Toggle */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-1.5">
            <h3 className="text-xs font-bold text-slate-800 tracking-wider uppercase">Aspect Sentiment Scores</h3>
            <span className="px-1.5 py-0.5 text-[10px] font-bold bg-indigo-100 text-indigo-700 border border-indigo-200 rounded-md">
              AI Aggregated
            </span>
          </div>
          <p className="text-[11px] text-slate-500 mt-0.5">Click an aspect to filter reviews below</p>
        </div>

        <div className="flex bg-slate-100 border border-slate-200 rounded-lg p-0.5">
          <button
            onClick={() => setViewMode('radar')}
            className={`px-2.5 py-1 text-xs font-semibold rounded-md flex items-center gap-1 transition-all cursor-pointer ${
              viewMode === 'radar' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <PieChart className="w-3.5 h-3.5" /> Radar
          </button>
          <button
            onClick={() => setViewMode('bars')}
            className={`px-2.5 py-1 text-xs font-semibold rounded-md flex items-center gap-1 transition-all cursor-pointer ${
              viewMode === 'bars' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" /> Bars
          </button>
        </div>
      </div>

      {/* Radar View */}
      {viewMode === 'radar' ? (
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="75%" data={chartData}>
              <PolarGrid stroke="#cbd5e1" />
              <PolarAngleAxis 
                dataKey="label" 
                tick={{ fill: '#334155', fontSize: 11, fontWeight: 700 }}
              />
              <PolarRadiusAxis angle={30} domain={[0, 5]} stroke="#94a3b8" tick={{ fill: '#64748b', fontSize: 10 }} />
              <Radar
                name="Rating"
                dataKey="score"
                stroke="#4f46e5"
                fill="#6366f1"
                fillOpacity={0.35}
                dot={(props) => {
                  const { cx, cy, payload } = props;
                  if (!payload) return null;
                  const isSelected = activeAspect === payload.aspectKey;
                  return (
                    <circle
                      key={payload.aspectKey}
                      cx={cx}
                      cy={cy}
                      r={isSelected ? 6 : 4}
                      fill={isSelected ? '#d97706' : '#4f46e5'}
                      stroke="#fff"
                      strokeWidth={1.5}
                      className="cursor-pointer hover:scale-125 transition-transform"
                      onClick={() => onSelectAspect && onSelectAspect(payload.aspectKey)}
                    />
                  );
                }}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-white border border-slate-200 p-2.5 rounded-xl text-xs text-slate-800 shadow-xl">
                        <div className="font-bold text-indigo-700">{data.label}</div>
                        <div>Average: <span className="text-amber-600 font-extrabold">{data.score}★</span></div>
                        <div className="text-[10px] text-slate-500">Based on {data.count} mentions</div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      ) : (
        /* Progress Bar View */
        <div className="space-y-3 pt-2">
          {chartData.map((asp) => {
            const info = aspectLabels[asp.aspectKey] || { name: asp.label, icon: '⚡' };
            const isSelected = activeAspect === asp.aspectKey;
            const pct = (asp.score / 5.0) * 100;
            return (
              <div
                key={asp.aspectKey}
                onClick={() => onSelectAspect && onSelectAspect(asp.aspectKey)}
                className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-50 border-indigo-300 shadow-sm'
                    : 'bg-slate-50 hover:bg-slate-100 border-slate-200'
                }`}
              >
                <div className="flex justify-between items-center text-xs mb-1.5">
                  <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                    <span>{info.icon}</span>
                    <span>{info.name}</span>
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-600 font-extrabold">{asp.score}★</span>
                    <span className="text-[10px] text-slate-500">({asp.count})</span>
                  </div>
                </div>
                <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-amber-500 rounded-full transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
