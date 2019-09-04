import React from "react"
import { connect } from "react-redux"
import { addWidget, changeInputValue } from "../../Redux/actions"
import "../../Styles/AddSheetMusicPopup.css"

const AddSheetMusicForm = ( { addWidget, onInputChange,  title = "" } ) => {
    return(
        <div>
            Add Sheet Music
            <br/>
            <input type="text" name="title" onChange={onInputChange} value={title}/>
            <button onClick={()=>addWidget(title)}>Submit</button>
        </div>   
     )    
}

export default connect(
    state => ({...state.AddPanel, addWidget}),
    dispatch => ({
      onInputChange: event =>
        dispatch(changeInputValue(event.target.name, event.target.value)),
    })
  )(AddSheetMusicForm)