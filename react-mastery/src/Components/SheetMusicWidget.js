import React from "react"
import "../Styles/SheetMusicWidget.css"

function SheetMusicWidget (props) {
    return (
        <div className="sheetMusicWidget" key={props.index}>
             <h5 className="index">{props.index}</h5>
            <h3 className="title">{props.title}</h3> 
        </div>
    )
}

export default SheetMusicWidget