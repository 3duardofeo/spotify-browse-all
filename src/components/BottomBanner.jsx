import React from 'react';

const BottomBanner = () => {
  return (
    <div className="fixed bg-[#181818] border-[#282828] border-t border-solid h-auto min-h-[68px] left-0 bottom-0 w-full z-30">
      <div className="bg-gradient-to-r from-[#af2896] to-[#509bf5] px-4 sm:px-6 lg:px-4 py-3 lg:py-[12px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <div className="flex flex-col text-white">
          <div className="text-xs lg:text-[12px] tracking-wider uppercase mb-1">
            <p>Preview of Spotify</p>
          </div>
          <div className="text-sm lg:text-[15px] max-w-2xl">
            <p>
              Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.
            </p>
          </div>
        </div>
        <button className="bg-white text-black text-sm lg:text-[15px] font-bold px-6 lg:px-8 py-[12px] rounded-full hover:scale-105 transition-transform whitespace-nowrap shrink-0 self-center sm:self-auto">
          Sign up free
        </button>
      </div>
    </div>
  );
};

export default BottomBanner;
