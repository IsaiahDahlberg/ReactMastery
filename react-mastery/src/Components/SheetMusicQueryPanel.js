import React from "react"
import { connect } from "react-redux";
import SheetMusicWidget from './SheetMusicWidget';
import { getsheetMusicList } from '../Redux/selectors';
import '../Styles/SheetMusicQueryPanel.css'

const SheetMusicQueryPanel = ( {sheetMusic} ) => {
    return(
        <div className="sheetMusicQueryPanel"> 
            {
               sheetMusic ? sheetMusic.map( s => <SheetMusicWidget index={s.index} title={s.title} key={s.index}/> ) 
                          : "Nothing here to see"
            }
        </div>
    )
}

const mapStateToProps = state =>{
    const sheetMusic = getsheetMusicList(state)
    return { sheetMusic }
} 

export default connect(mapStateToProps)(SheetMusicQueryPanel);