import React from 'react';
import SheetMusicQueryPanel from "./Components/SheetMusicQueryPanel"
import AddSheetMusicPopup from "./Components/AddSheetMusic/AddSheetMusicPopup"
import './App.css';

import { toggleAddPanel } from "./Redux/actions"

function App() {
  return (
    <div className="base">
      <header>
        <h1 className="webSiteHeader">Sheet Music</h1>
        <button onClick={()=>toggleAddPanel()}>Add</button>
        <AddSheetMusicPopup />
        <SheetMusicQueryPanel />
      </header>
    </div>
  )
}

export default App;
