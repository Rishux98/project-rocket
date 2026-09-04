import React from 'react';
import { Cpu, Battery, Zap, Shield, HardDrive, Wifi, Weight, Monitor } from 'lucide-react';

const getSpecIcon = (key) => {
  const k = key.toLowerCase();
  if (k.includes('battery') || k.includes('charging')) return <Battery className="w-4 h-4 text-emerald-600" />;
  if (k.includes('processor') || k.includes('driver') || k.includes('sensor')) return <Cpu className="w-4 h-4 text-indigo-600" />;
  if (k.includes('display') || k.includes('screen')) return <Monitor className="w-4 h-4 text-purple-600" />;
  if (k.includes('storage') || k.includes('ram')) return <HardDrive className="w-4 h-4 text-amber-600" />;
  if (k.includes('bluetooth') || k.includes('ports') || k.includes('connectivity')) return <Wifi className="w-4 h-4 text-sky-600" />;
  if (k.includes('weight')) return <Weight className="w-4 h-4 text-rose-600" />;
  return <Zap className="w-4 h-4 text-indigo-600" />;
};

export const SpecTable = ({ specs }) => {
  if (!specs) return null;

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
      <h3 className="text-xs font-bold text-slate-800 tracking-wider uppercase flex items-center gap-2">
        <Shield className="w-4 h-4 text-indigo-600" />
        Technical Specifications
      </h3>

      <div className="divide-y divide-slate-100">
        {Object.entries(specs).map(([key, value]) => (
          <div key={key} className="py-2.5 flex items-center justify-between text-xs hover:bg-slate-50 px-2 rounded-lg transition-colors">
            <span className="text-slate-600 font-medium flex items-center gap-2">
              {getSpecIcon(key)}
              {key}
            </span>
            <span className="text-slate-900 font-bold text-right max-w-[60%]">
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
