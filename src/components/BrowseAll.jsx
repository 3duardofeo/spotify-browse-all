import React from 'react';

const categories = [
  { name: 'Podcasts', color: '#27856a', image: 'http://localhost:3845/assets/567158eb895ad26718a814345af0fc43ee785ec5.png' },
  { name: 'Audiobooks', color: '#283ea3', image: 'http://localhost:3845/assets/6bd7388aa1fd1ea309bf0171d1a98fdc84c31e5b.png' },
  { name: 'Made For You', color: '#1e3264', image: 'http://localhost:3845/assets/ffae8ecd2bc550bdb772e1a75829f8dc0a451967.png' },
  { name: 'Charts', color: '#8d67ab', image: 'http://localhost:3845/assets/4b1b303c65b105d768ae65cb58683e034dc1653b.png' },
  { name: 'New Releases', color: '#e8115b', image: 'http://localhost:3845/assets/1da0369e9c7166a07b8b735cdff7d1b796a92655.png' },
  { name: 'Discover', color: '#8d67ab', image: 'http://localhost:3845/assets/3a76d679b53f39fd7aeaca0f5ea894ee4bdb1d87.png' },
  { name: 'Live Events', color: '#7358ff', image: 'http://localhost:3845/assets/6f3e32aa72141c47817e28394f90dee1aaddabd1.png' },
  { name: 'Hip-Hop', color: '#b49bc8', image: 'http://localhost:3845/assets/8867cf164d9a6b1f83e8a8d1afc87e1512e502b2.png' },
  { name: 'Pop', color: '#f037a5', image: 'http://localhost:3845/assets/195f73c9f38b01c6d4bc01cfc659cb43e96352c9.png' },
  { name: 'Country', color: '#9cf0e1', image: 'http://localhost:3845/assets/03d84bfad13011c81b04f6d1b5de5e8fd90391ba.png' },
  { name: 'Latin', color: '#e1118b', image: 'http://localhost:3845/assets/2ebd4276b445913535efe6b4e2db607552622ec6.png' },
  { name: 'Rock', color: '#d7f27d', image: 'http://localhost:3845/assets/8cdf45c922256ab70be2b12704249dbc18955eb6.png' },
  { name: 'Summer', color: '#8d67ab', image: 'http://localhost:3845/assets/9ab3daa9a5ad0d9c684060094d0c99e103809bf1.png' },
  { name: 'Workout', color: '#777777', image: 'http://localhost:3845/assets/7b9e0bf49b2444634c400d127517c45898c644d7.png' },
  { name: 'R&B', color: '#dc148c', image: 'http://localhost:3845/assets/68ddbf4f62c6a79519a81f3e8f596c307733168f.png' },
];

const BrowseAll = () => {
  return (
    <div className="fixed bg-[#333333] h-screen left-0 lg:left-[241px] right-0 top-16 lg:top-[64px] overflow-y-auto pb-20 lg:pb-[100px]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 lg:gap-[21px] items-start pt-8 lg:pt-16 mb-8">
          {/* Title */}
          <div>
            <h1 className="text-2xl lg:text-[20px] font-bold text-white">Browse all</h1>
          </div>

          {/* Category Grid - Responsive with better breakpoints to prevent overlapping */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-3 sm:gap-4 w-full">
            {categories.map((category, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                style={{ 
                  backgroundColor: category.color, 
                  minHeight: '120px',
                  aspectRatio: '1 / 1'
                }}
              >
                <div className="absolute bottom-[-22px] flex items-center justify-center right-[-33px]">
                  <div className="flex-none rotate-[25deg]">
                    <div className="relative shadow-lg w-20 h-20 lg:w-[100px] lg:h-[100px]">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          alt={category.name}
                          className="absolute left-0 max-w-none w-full h-full top-0 object-cover"
                          src={category.image}
                          onError={(e) => {
                            const currentSrc = e.target.src;
                            if (!currentSrc.includes('localhost:3845') || currentSrc.includes('retry')) {
                              e.target.style.display = 'none';
                            } else {
                              e.target.src = category.image + '?retry=1';
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 left-0 p-3 lg:p-4">
                  <div className="flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-base lg:text-[20px] text-nowrap text-white">
                    <p className="leading-tight lg:leading-[38.4px] whitespace-pre">{category.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseAll;
