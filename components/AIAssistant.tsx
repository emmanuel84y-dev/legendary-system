
'use client';

import React, { useState, useEffect } from 'react';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGenerate = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setResponse(null);

    try {
      console.log('[v0] Sending request to /api/ai-strategist with prompt:', input);
      
      const res = await fetch('/api/ai-strategist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: input,
        }),
      });

      console.log('[v0] Response status:', res.status);

      if (!res.ok) {
        const errorText = await res.text();
        console.error('[v0] Response not OK:', res.status, errorText);
        throw new Error(`API returned ${res.status}: ${errorText}`);
      }

      const data = await res.json();
      console.log('[v0] Response data:', data);
      
      if (data.error) {
        setResponse(`Error: ${data.error}`);
      } else {
        setResponse(data.result || 'No response returned.');
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : String(error);
      console.error('[v0] AI Assistant Error:', errorMsg);
      setResponse(`Error: ${errorMsg}`);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="fixed bottom-24 right-8 z-[70] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-slide-up flex flex-col max-h-[600px]">
          <div className="bg-deepBlue p-4 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-2">
              <i className="fas fa-robot text-gold text-lg"></i>
              <div>
                <h3 className="text-white font-bold text-sm leading-tight">Pinnacle Strategist</h3>
                <p className="text-silver text-lg opacity-80 uppercase tracking-wider">AI Intelligence Unit</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition">
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          <div className="p-5 overflow-y-auto flex-grow bg-gray-50">
            {!response ? (
              <div className="flex flex-col h-full">
                <p className="text-sm text-gray-600 mb-3 font-medium">Briefly describe your current business challenge:</p>
                <textarea 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl p-3 text-sm h-32 focus:ring-2 focus:ring-gold outline-none mb-4 shadow-sm resize-none bg-white text-gray-800 placeholder-gray-400"
                  placeholder="e.g., 'We are seeing high employee turnover in our sales department despite competitive salaries'..."
                ></textarea>
                <button 
                  onClick={handleGenerate}
                  disabled={loading || !input.trim()}
                  className="w-full bg-deepBlue text-white font-bold py-3 rounded-xl hover:bg-gold hover:text-deepBlue transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md mt-auto"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <i className="fas fa-circle-notch animate-spin"></i> Analyzing...
                    </span>
                  ) : 'Generate Strategy'}
                </button>
              </div>
            ) : (
              <div className="flex flex-col h-full">
                <div className="prose prose-sm prose-p:my-1 prose-headings:my-2 max-w-none text-gray-700 bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-4 overflow-y-auto">
                    {response.split('\n').map((line, i) => {
                      const isHeader = line.match(/^[A-Z\s]+:/) || line.match(/^\d\./);
                      return (
                        <p key={i} className={`text-sm ${isHeader ? "font-bold text-deepBlue mt-3 mb-1" : "mb-2"}`}>
                          {line}
                        </p>
                      );
                    })}
                </div>
                <button 
                  onClick={() => { setResponse(null); setInput(''); }}
                  className="w-full py-3 border-2 border-deepBlue text-deepBlue font-bold rounded-xl hover:bg-deepBlue hover:text-white transition shrink-0"
                >
                  New Diagnosis
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 md:w-16 md:h-16 bg-gold text-deepBlue rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 border-4 border-white z-50 ${!isOpen ? 'animate-pulse-slow' : ''}`}
        aria-label="Toggle AI Assistant"
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-brain'} text-2xl`}></i>
      </button>

      <button
        onClick={scrollToTop}
        className="w-14 h-14 md:w-16 md:h-16 bg-gold text-deepBlue rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 active:bg-deepBlue active:text-gold z-50 mt-4"
        aria-label="Back to top"
        title="Back to top"
      >
        <i className="fas fa-arrow-up text-2xl"></i>
      </button>
    </div>
  );
};

export default AIAssistant;
