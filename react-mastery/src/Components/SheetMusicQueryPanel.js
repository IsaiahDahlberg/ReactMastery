import React from 'react'
import SheetMusicWidget from './SheetMusicWidget';
import '../Styles/SheetMusicQueryPanel.css'
const renderStuffs = (arr) =>{
    return arr.map( s => <SheetMusicWidget index={s.index} title={s.title} /> )
}

function SheetMusicQueryPanel (props) {

    return (
        <div className="sheetMusicQueryPanel"> 
            {
                renderStuffs(props.sheetMusic)
            }
        </div>)

}

export default SheetMusicQueryPanel

// 