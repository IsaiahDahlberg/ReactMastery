import React from "react"
import { connect } from "react-redux"
import { deleteWidget } from "../Redux/actions";
import "../Styles/SheetMusicWidget.css"

const SheetMusicWidget = ( deleteWidget, props ) => {
    return (
        <div className="sheetMusicWidget">
             <h5 className="index">{props.id}</h5>
            <h3 className="title">{props.title}</h3> 
            <button onClick={()=>deleteWidget(props.id)}>Delete</button>
        </div>
    )
}

export default connect(null,{deleteWidget})(SheetMusicWidget)