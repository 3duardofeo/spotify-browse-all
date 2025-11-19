import React from 'react';

const categories = [
  { name: 'Podcasts', color: '#00ffff', neonColor: '#00ffff' },
  { name: 'Audiobooks', color: '#9d00ff', neonColor: '#9d00ff' },
  { name: 'Made For You', color: '#ff00ff', neonColor: '#ff00ff' },
  { name: 'Charts', color: '#00ff41', neonColor: '#00ff41' },
  { name: 'New Releases', color: '#ff0080', neonColor: '#ff0080' },
  { name: 'Discover', color: '#00ffff', neonColor: '#00ffff' },
  { name: 'Live Events', color: '#9d00ff', neonColor: '#9d00ff' },
  { name: 'Hip-Hop', color: '#ff00ff', neonColor: '#ff00ff' },
  { name: 'Pop', color: '#00ff41', neonColor: '#00ff41' },
  { name: 'Country', color: '#00ffff', neonColor: '#00ffff' },
  { name: 'Latin', color: '#ff0080', neonColor: '#ff0080' },
  { name: 'Rock', color: '#9d00ff', neonColor: '#9d00ff' },
  { name: 'Summer', color: '#ff00ff', neonColor: '#ff00ff' },
  { name: 'Workout', color: '#00ff41', neonColor: '#00ff41' },
  { name: 'R&B', color: '#ff0080', neonColor: '#ff0080' },
];

const BrowseAll = () => {
  return (
    <div className="fixed bg-black h-screen left-0 lg:left-[241px] right-0 top-16 lg:top-[64px] overflow-y-auto pb-20 lg:pb-[100px]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 lg:gap-[21px] items-start pt-8 lg:pt-16 mb-8">
          {/* Title */}
          <div>
            <h1 className="text-2xl lg:text-[20px] font-bold neon-cyan cyber-glow">Browse all</h1>
          </div>

          {/* Category Grid - Responsive with better breakpoints to prevent overlapping */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-3 sm:gap-4 w-full">
            {categories.map((category, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 border-2"
                style={{ 
                  backgroundColor: `${category.color}15`,
                  borderColor: category.neonColor,
                  minHeight: '120px',
                  aspectRatio: '1 / 1',
                  boxShadow: `0 0 20px ${category.neonColor}40, inset 0 0 20px ${category.neonColor}20`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 30px ${category.neonColor}, 0 0 60px ${category.neonColor}80, inset 0 0 30px ${category.neonColor}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 20px ${category.neonColor}40, inset 0 0 20px ${category.neonColor}20`;
                }}
              >
                <div className="absolute top-0 left-0 p-3 lg:p-4 z-10">
                  <div className="flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-base lg:text-[20px] text-nowrap">
                    <p 
                      className="leading-tight lg:leading-[38.4px] whitespace-pre font-bold"
                      style={{
                        color: category.neonColor,
                        textShadow: `0 0 10px ${category.neonColor}, 0 0 20px ${category.neonColor}, 0 0 30px ${category.neonColor}`
                      }}
                    >
                      {category.name}
                    </p>
                  </div>
                </div>
                {/* Cyberpunk grid pattern overlay */}
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `linear-gradient(${category.neonColor}40 1px, transparent 1px), linear-gradient(90deg, ${category.neonColor}40 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseAll;
