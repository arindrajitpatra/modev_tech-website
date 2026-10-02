import React from 'react';
import { X, Play, ShieldAlert, Cpu } from 'lucide-react';

interface VideoModalProps {
  videoUrl: string;
  projectTitle: string;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ videoUrl, projectTitle, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/85 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-4xl rounded-2xl bg-dark-900 border border-slate-700 shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-dark-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-brand-blue/20 text-brand-cyan">
              <Play className="w-4 h-4 fill-brand-cyan" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-brand-cyan font-bold tracking-wider">
                LIVE DEMO VIDEO REPLAY
              </span>
              <h3 className="text-base font-bold text-white">
                {projectTitle}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-dark-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Embed Container */}
        <div className="relative aspect-video bg-black flex items-center justify-center">
          <iframe
            src={videoUrl}
            title={`Demo Video - ${projectTitle}`}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Modal Footer Note */}
        <div className="bg-dark-950 px-6 py-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-brand-cyan" />
            <span>MoDEV Engineering Telemetry Active</span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white font-semibold underline"
          >
            Close Video
          </button>
        </div>

      </div>
    </div>
  );
};
