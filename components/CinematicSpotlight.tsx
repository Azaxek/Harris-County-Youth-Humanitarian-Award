
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Link } from 'react-router-dom';

const CinematicSpotlight: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  /**
   * Helper function to poll the status of a video generation operation.
   */
  const pollOperation = async (ai: any, initialOperation: any) => {
    let operation = initialOperation;
    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 10000));
      operation = await ai.operations.getVideosOperation({ operation: operation });
    }
    return operation;
  };

  const generateSpotlight = async () => {
    setIsGenerating(true);
    setError(null);
    try {
      // @ts-ignore
      const hasKey = await window.aistudio.hasSelectedApiKey();
      if (!hasKey) {
        // @ts-ignore
        await window.aistudio.openSelectKey();
      }

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      setLoadingMessage("Synthesizing cinematic spotlight for Aryav Agrawal...");
      let op = await ai.models.generateVideos({
        model: 'veo-3.1-generate-preview',
        prompt: 'Cinematic slow motion shot of a focused young researcher analyze complex data visualizations on transparent glass screens, NASA research laboratory aesthetic, soft blue lighting, 4k detail, professional cinematography, camera slightly moving.',
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: '16:9'
        }
      });
      
      let completedOp = await pollOperation(ai, op);
      
      setLoadingMessage("Enhancing narrative flow and extending cinematic duration...");
      let extendOp = await ai.models.generateVideos({
        model: 'veo-3.1-generate-preview',
        prompt: 'The researcher looks up from the screens with a slight smile of discovery, camera slowly pans out to reveal the modern research center, maintaining cinematic lighting and aesthetic.',
        video: completedOp.response?.generatedVideos?.[0]?.video,
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: '16:9'
        }
      });

      let finalOp = await pollOperation(ai, extendOp);
      
      const downloadLink = finalOp.response?.generatedVideos?.[0]?.video?.uri;
      if (downloadLink) {
        setVideoUrl(`${downloadLink}&key=${process.env.API_KEY}`);
      } else {
        throw new Error("Failed to retrieve final video link.");
      }
    } catch (err: any) {
      console.error(err);
      if (err.message?.includes("Requested entity was not found")) {
        setError("API key issue detected. Please re-select your key.");
        // @ts-ignore
        await window.aistudio.openSelectKey();
      } else {
        setError("An error occurred during synthesis. Please try again.");
      }
    } finally {
      setIsGenerating(false);
      setLoadingMessage("");
    }
  };

  return (
    <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
      <div className="lg:w-1/2 relative bg-slate-800 flex items-center justify-center min-h-[400px]">
        {videoUrl ? (
          <video 
            src={videoUrl} 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="relative w-full h-full">
            <img 
              src="https://picsum.photos/seed/aryav/800/1000" 
              alt="Aryav Agrawal" 
              className={`w-full h-full object-cover transition-opacity duration-1000 ${isGenerating ? 'opacity-30 blur-sm' : 'opacity-100'}`}
            />
            {!isGenerating && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group cursor-pointer" onClick={generateSpotlight}>
                <button className="bg-white/90 backdrop-blur px-6 py-3 rounded-full flex items-center space-x-3 text-slate-900 font-bold hover:scale-110 transition-transform shadow-xl">
                  <svg className="w-5 h-5 fill-current text-blue-700" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  <span>Generate AI Cinematic Bio</span>
                </button>
              </div>
            )}
            {isGenerating && (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mb-6"></div>
                <p className="text-white font-medium text-lg animate-pulse">{loadingMessage}</p>
                <p className="text-slate-400 text-sm mt-2">This may take a few minutes. Creating high-fidelity cinematic content.</p>
              </div>
            )}
          </div>
        )}
        {error && (
          <div className="absolute bottom-4 left-4 right-4 bg-red-500/90 text-white p-3 rounded-xl text-sm text-center backdrop-blur">
            {error}
            <button onClick={generateSpotlight} className="ml-2 underline font-bold">Retry</button>
          </div>
        )}
      </div>
      
      <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
        <div className="flex items-center space-x-2 mb-4">
          <h3 className="text-blue-400 font-bold uppercase tracking-widest text-sm">2025 First Place Honoree</h3>
          {videoUrl && <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-[10px] rounded border border-blue-500/30">AI GENERATED BIO</span>}
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Aryav Agrawal</h2>
        <p className="text-lg text-slate-300 mb-6 leading-relaxed italic">
          "Humanity flourishes when we bridge the gaps in our community. Every small act of service creates a ripple that can eventually move oceans."
        </p>
        <div className="bg-blue-900/40 border border-blue-500/30 rounded-2xl p-4 mb-8">
          <p className="text-blue-300 text-sm font-medium">
            <span className="text-white font-bold mr-2">Competition Scale:</span>
            Aryav was selected from a record-breaking field of <span className="text-white font-bold">100+ nominees</span> competing in the 2025 cycle.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link to="/archive" className="text-blue-400 font-semibold flex items-center group">
            View All 2025 Winners
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          {!videoUrl && !isGenerating && (
            <button 
              onClick={generateSpotlight}
              className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
            >
              Learn about AI Bio Generation
            </button>
          )}
        </div>
        <p className="mt-8 text-[10px] text-slate-500 uppercase tracking-tighter">
          * Cinematic spotlight is generated in real-time using advanced generative video models. 
          A paid API key is required to access this experimental feature.
          <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="ml-1 underline">Billing Info</a>
        </p>
      </div>
    </div>
  );
};

export default CinematicSpotlight;
