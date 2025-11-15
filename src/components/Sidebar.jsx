import React, { useState } from 'react';

const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-30 bg-black/70 p-2 rounded-lg text-white"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </svg>
      </button>

      {/* Sidebar */}
      <div className={`
        fixed bg-black h-screen left-0 top-0 z-20 transition-transform duration-300
        w-[241px] 
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
        <div className="h-full overflow-y-auto flex flex-col pb-4">
          {/* Spotify Logo */}
          <div className="flex items-center gap-2 px-6 py-4 shrink-0">
            <svg className="w-8 h-8 text-white shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            <div className="text-white text-xl lg:text-2xl font-bold">Spotify</div>
          </div>

          {/* Navigation Menu */}
          <div className="px-2 py-1 shrink-0">
            {/* Home */}
            <div className="flex gap-4 items-center px-4 py-2 rounded-md hover:bg-[#1a1a1a] cursor-pointer transition-colors">
              <svg className="w-6 h-6 text-[#b3b3b3] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
              <span className="text-[#b3b3b3] text-sm font-bold">Home</span>
            </div>

            {/* Search */}
            <div className="flex gap-4 items-center px-4 py-2 rounded-md hover:bg-[#1a1a1a] cursor-pointer transition-colors">
              <svg className="w-6 h-6 text-white shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"/>
              </svg>
              <span className="text-white text-sm font-bold">Search</span>
            </div>

            {/* Your Library */}
            <div className="flex gap-4 items-center px-4 py-2 rounded-md hover:bg-[#1a1a1a] cursor-pointer transition-colors">
              <svg className="w-6 h-6 text-[#b3b3b3] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.5 2.134a1 1 0 0 1 1 0l11 6.288a1 1 0 0 1 .5.866v11a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-6.288l-6 3.428v6.86a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V9.288a1 1 0 0 1 .5-.866l11-6.288z"/>
              </svg>
              <span className="text-[#b3b3b3] text-sm font-bold">Your Library</span>
            </div>
          </div>

          {/* Playlist Section */}
          <div className="px-2 py-2 mt-2 shrink-0">
            {/* Create Playlist */}
            <div className="relative flex items-center opacity-70 hover:opacity-100 cursor-pointer transition-opacity px-4 py-2">
              <div className="bg-white rounded-sm w-5 h-5 flex items-center justify-center mr-3 shrink-0">
                <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                </svg>
              </div>
              <span className="text-white text-sm font-bold">Create Playlist</span>
            </div>

            {/* Liked Songs */}
            <div className="relative flex items-center opacity-70 hover:opacity-100 cursor-pointer transition-opacity px-4 py-2">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-sm w-5 h-5 flex items-center justify-center mr-3 shrink-0">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <span className="text-white text-sm font-bold">Liked Songs</span>
            </div>
          </div>

          {/* Footer Links - Matching original Figma design */}
          <div className="mt-[300px] px-6 pt-2 pb-3 shrink-0">
            <div className="flex flex-wrap gap-x-4 gap-y-0.5 text-[#a7a7a7] text-xs mb-1">
              <a href="#" className="hover:underline">Legal</a>
              <a href="#" className="hover:underline">Privacy Center</a>
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Cookies</a>
              <a href="#" className="hover:underline">About Ads</a>
            </div>
            {/* Cookies text - separate from links as in original design */}
            <div className="text-[#b3b3b3] text-xs mb-1.5">
              Cookies
            </div>
            {/* Language Selector - Matching original Figma design */}
            <button className="border border-[#727272] border-solid flex gap-1 items-center px-3 py-2 rounded-full hover:border-white transition-colors w-full sm:w-auto">
              <svg className="w-4 h-4 text-white shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
              <span className="text-white text-sm font-bold">English</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-10"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
