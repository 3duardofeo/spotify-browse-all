import React from 'react';

const BottomBanner = () => {
  return (
    <div className="fixed bg-black border-cyan-400/30 border-t-2 border-solid h-auto min-h-[68px] left-0 bottom-0 w-full z-30" style={{boxShadow: '0 -2px 20px rgba(0, 255, 255, 0.3)'}}>
      <div className="bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 px-4 sm:px-6 lg:px-4 py-3 lg:py-[12px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 border-t border-cyan-400/20">
        <div className="flex flex-col text-cyan-400">
          <div className="text-xs lg:text-[12px] tracking-wider uppercase mb-1 font-bold cyber-glow">
            <p>Preview of Spotify</p>
          </div>
          <div className="text-sm lg:text-[15px] max-w-2xl text-cyan-300/80">
            <p>
              Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.
            </p>
          </div>
        </div>
        <button className="bg-cyan-400 text-black text-sm lg:text-[15px] font-bold px-6 lg:px-8 py-[12px] rounded-full hover:scale-105 transition-all whitespace-nowrap shrink-0 self-center sm:self-auto hover:shadow-[0_0_25px_rgba(0,255,255,0.8)] border-2 border-cyan-300">
          Sign up free
        </button>
      </div>
    </div>
  );
};

export default BottomBanner;
