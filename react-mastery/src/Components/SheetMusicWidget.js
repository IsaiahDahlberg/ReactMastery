import React from "react"
import "../Styles/SheetMusicWidget.css"

const SheetMusicWidget = ( props,  ) => {
    const {id, title, deleteFunc} = props
    return (
        <div className="sheetMusicWidget">
             <h5 className="index">{id}</h5>
            <h3 className="title">{title}</h3> 
            <button className="delete" onClick={()=>deleteFunc(id)}>Delete</button>
        </div>
    )
}

export default SheetMusicWidget