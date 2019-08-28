import React from 'react'
import SheetMusicWidget from './SheetMusicWidget';

const renderStuffs = (arr) =>{
    return arr.map( s => <SheetMusicWidget index={s.index} title={s.title} /> )
}

function SheetMusicQueryPanel (props) {

    return (
        <div> 
            <h1>Sheet Music Query Panel</h1>
            {
                renderStuffs(props.sheetMusic)
                }
        </div>)

}

export default SheetMusicQueryPanel

// 