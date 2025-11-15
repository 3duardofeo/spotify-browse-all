import React, { useState, useRef } from 'react';

const Header = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchInputRef = useRef(null);

  const handleSearchClick = () => {
    setIsSearchFocused(true);
    searchInputRef.current?.focus();
  };

  const handleSearchBlur = () => {
    setIsSearchFocused(false);
  };

  return (
    <div className="fixed bg-black/50 h-16 lg:h-[64px] left-0 lg:left-[241px] right-0 top-0 z-20">
      <div className="flex items-center justify-between h-full px-2 sm:px-4 lg:px-8">
        {/* Left Side: Navigation Arrows and Search */}
        <div className="flex items-center gap-4 lg:gap-8 flex-1 lg:flex-none">
          {/* Navigation Arrows - Hidden on mobile */}
          <div className="hidden lg:flex gap-4 items-center">
            <button className="bg-[rgba(0,0,0,0.7)] opacity-60 hover:opacity-100 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer transition-opacity">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>
            <button className="bg-[rgba(0,0,0,0.7)] opacity-60 hover:opacity-100 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer transition-opacity">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </button>
          </div>

          {/* Search Bar - Aligned to left after navigation arrows */}
          <div className="flex-1 lg:flex-none lg:w-[364px] relative">
            <div 
              className={`
                relative flex items-center bg-white rounded-full px-3 lg:px-12 py-2 lg:py-[10px] transition-all
                ${isSearchFocused ? 'ring-2 ring-white' : ''}
              `}
              onClick={handleSearchClick}
            >
              <div className="absolute left-3 lg:left-4 flex items-center justify-center pointer-events-none">
                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"/>
                </svg>
              </div>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="What do you want to listen to?"
                className="w-full bg-transparent border-none outline-none text-[#757575] text-sm lg:text-[14px] pl-8 lg:pl-0 placeholder:text-[#757575]"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={handleSearchBlur}
              />
            </div>
          </div>
        </div>

        {/* Right Side: Auth Buttons - Always aligned to right */}
        <div className="hidden sm:flex gap-4 lg:gap-8 items-center">
          <button className="text-[#a7a7a7] hover:text-white text-sm lg:text-[15px] font-bold transition-colors whitespace-nowrap">
            Sign up
          </button>
          <button className="bg-white text-black text-sm lg:text-[15px] font-bold px-4 lg:px-8 py-2 lg:py-[15px] rounded-full hover:scale-105 transition-transform whitespace-nowrap">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
