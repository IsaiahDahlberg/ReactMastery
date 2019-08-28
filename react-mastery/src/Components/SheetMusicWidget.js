import React from "react"

function SheetMusicWidget (props) {
    return (
        <div className="sheetMusicWidget" key={props.index}>
            <h3>{props.title}</h3>
            <h5>{props.index}</h5>
        </div>
    )
}

export default SheetMusicWidget