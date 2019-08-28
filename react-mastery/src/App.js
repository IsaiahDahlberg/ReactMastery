import React from 'react';
import SheetMusicQueryPanel from "./Components/SheetMusicQueryPanel"
import './App.css';



function App() {
  var mockSM = [
    {index: 1, title: "Fur Elise"},
    {index: 2, title: "Ashkon Farewell"},
    {index: 3, title: "You got a Friend in me"},
    {index: 4, title: "Riders of Rohan"},
    {index: 5, title: "Golum's Theme"},
    {index: 6, title: "Pomp and Circumstnace"},
    {index: 7, title: "Golden Anniversary"},
    {index: 8, title: "Blah"},
    {index: 9, title: "Blah blah"}
  ]

  return (
    <div className="base">
      <header>
        <h1 className="webSiteHeader">Sheet Music</h1>
        <button>Add</button>
        <SheetMusicQueryPanel sheetMusic={mockSM} />
      </header>
    </div>
  )
}

export default App;
