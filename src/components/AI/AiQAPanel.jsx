import React, { useState } from 'react';
import { Sparkles, Send, Bot, ShieldCheck, ExternalLink, Loader2 } from 'lucide-react';
import { apiService } from '../../services/apiService';

export const AiQAPanel = ({ productId, onSelectCitation }) => {
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState(null);

  const samplePrompts = [
    "Is battery life good for long flights?",
    "How is the build quality and comfort?",
    "Is the noise cancellation effective?",
    "Is it worth the price tag?"
  ];

  const handleAsk = async (promptText) => {
    const q = promptText || question;
    if (!q.trim()) return;

    setIsLoading(true);
    try {
      const res = await apiService.askAiQuestion(productId, q);
      setAiResponse(res);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/70 rounded-2xl p-5 border border-indigo-200 shadow-md space-y-4">
      
      {/* Panel Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-600/20">
            <Sparkles className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
              Ask About This Product
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-1 font-bold">
                <ShieldCheck className="w-3 h-3 text-emerald-600" /> Grounded RAG
              </span>
            </h3>
            <p className="text-[11px] text-slate-500">AI quotes verified buyer reviews with direct citation anchors</p>
          </div>
        </div>
      </div>

      {/* Input Box & Submit */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAsk();
        }}
        className="relative"
      >
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="e.g. Can I use these for gaming without audio latency?"
          className="w-full pl-4 pr-12 py-3 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 transition-all shadow-inner"
        />
        <button
          type="submit"
          disabled={isLoading || !question.trim()}
          className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg text-white font-semibold transition-all cursor-pointer ${
            isLoading || !question.trim()
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/30 active:scale-95'
          }`}
        >
          {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        </button>
      </form>

      {/* Sample Quick Chips */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {samplePrompts.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => {
              setQuestion(prompt);
              handleAsk(prompt);
            }}
            className="text-[11px] px-2.5 py-1 rounded-lg bg-white hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 border border-slate-200 hover:border-indigo-300 transition-all text-left font-medium shadow-2xs"
          >
            💬 "{prompt}"
          </button>
        ))}
      </div>

      {/* AI Answer Box */}
      {aiResponse && (
        <div className="mt-4 p-4 rounded-xl bg-white border border-indigo-200 shadow-sm space-y-3 animate-fadeIn">
          
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-700">
              <Bot className="w-4 h-4 text-indigo-600" />
              <span>Grounded AI Answer</span>
            </div>
            <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              {aiResponse.groundednessScore}% Grounded Confidence
            </span>
          </div>

          <p className="text-xs text-slate-800 leading-relaxed font-sans">
            {aiResponse.answer}
          </p>

          {/* Interactive Citations List */}
          {aiResponse.citations && aiResponse.citations.length > 0 && (
            <div className="pt-2 border-t border-slate-100 space-y-1.5">
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Quoted Reviews (Click to Jump):
              </div>
              <div className="flex flex-wrap gap-2">
                {aiResponse.citations.map((cit) => (
                  <button
                    key={cit.id}
                    onClick={() => onSelectCitation(cit.id)}
                    className="px-2.5 py-1 rounded-lg bg-indigo-100 hover:bg-indigo-200 text-indigo-800 text-xs font-mono font-bold border border-indigo-200 flex items-center gap-1.5 transition-all hover:scale-105 cursor-pointer shadow-2xs"
                  >
                    <span>[Review #{cit.id}]</span>
                    <ExternalLink className="w-3 h-3 text-indigo-600" />
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>
      )}

    </div>
  );
};
