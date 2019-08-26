import React from 'react'

const mapSheetMusic = (sm) =>{
    return sm.map(s=> 
        <div class="sheetMusicWidget">
            <h3>{s.title}</h3>
            <h5>{s.index}</h5>
        </div>
    )
}

const SheetMusicQueryPanel = (sheetMusic) => (<div>
    <h1>Sheet Music Query Panel</h1>
    {mapSheetMusic(sheetMusic)}
</div>)

export default SheetMusicQueryPanel