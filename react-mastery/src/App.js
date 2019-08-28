import React from 'react';
import SheetMusicQueryPanel from "./Components/SheetMusicQueryPanel"
import './App.css';



function App() {
  var mockSM = [
    {index: 9, title: "Blah blah"},
    {index: 8, title: "Blah"},
    {index: 7, title: "Golden Anniversary"},
    {index: 6, title: "Pomp and Circumstnace"},
    {index: 5, title: "Golum's Theme"},
    {index: 4, title: "Riders of Rohan"},
    {index: 3, title: "You got a Friend in me"},
    {index: 2, title: "Ashkon Farewell"},
    {index: 1, title: "Fur Elise"}
  ]

  return (
    <div className="base">
      <header>
        <h1 className="webSiteHeader">Sheet Music</h1>
        <SheetMusicQueryPanel sheetMusic={mockSM} />
      </header>
    </div>
  )
}

export default App;
