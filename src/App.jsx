import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import BrowseAll from './components/BrowseAll';
import BottomBanner from './components/BottomBanner';
import './App.css';

function App() {
  return (
    <div className="relative w-full min-h-screen bg-black" data-name="Spotify">
      <Sidebar />
      <Header />
      <BrowseAll />
      <BottomBanner />
    </div>
  );
}

export default App;
