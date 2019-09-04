import React from 'react';
import SheetMusicQueryPanel from "./Components/SheetMusicQueryPanel"
import AddSheetMusicPopup from "./Components/AddSheetMusic/AddSheetMusicPopup"
import './App.css';

function App() {
  return (
    <div className="base">
      <header>
        <h1 className="webSiteHeader">Sheet Music</h1>      
        <AddSheetMusicPopup />
        <SheetMusicQueryPanel />
      </header>
    </div>
  )
}

export default App;
