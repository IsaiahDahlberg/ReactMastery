import React from "react"
import { toggleWidget } from "../Redux/actions";
import "../Styles/SheetMusicWidget.css"

function SheetMusicWidget (props) {
    return (
        <div className="sheetMusicWidget" key={props.index}>
             <h5 className="index">{props.index}</h5>
            <h3 className="title">{props.title}</h3> 
            <button onClick={()=>toggleWidget(props.index)}>Click</button>
        </div>
    )
}

export default SheetMusicWidget