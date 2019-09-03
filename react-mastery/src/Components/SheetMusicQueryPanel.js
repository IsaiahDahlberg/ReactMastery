import React from 'react'
import SheetMusicWidget from './SheetMusicWidget';
import '../Styles/SheetMusicQueryPanel.css'

const renderStuffs = (arr) =>{
    return arr
}

function SheetMusicQueryPanel (props) {

    return (
        <div className="sheetMusicQueryPanel"> 
            {
               props.sheetMusic.map( s => <SheetMusicWidget index={s.index} title={s.title} toggle={props.toggle} /> )
            }
            {
                
            }
        </div>)

}

export default SheetMusicQueryPanel