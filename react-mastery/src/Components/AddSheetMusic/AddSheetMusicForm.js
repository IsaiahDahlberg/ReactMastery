import React from "react"
import { connect } from "react-redux"
import { changeInputValue, addWidget, toggleAddPanel } from "../../Redux/actions"
import "../../Styles/AddSheetMusicPopup.css"

const AddSheetMusicForm = ( { onInputChange,  title = "", add, toggle, clear} ) => {
    return(
        <div>
            Add Sheet Music
            <br/>
            <input type="text" name="title" onChange={onInputChange} value={title} placeholder="Title" />
            <br/>
            <button className="submit" onClick={()=>add(title) && toggle() && clear() }>Submit</button>            
            <button onClick={()=>toggle()}>Cancel</button>
        </div>   
     )    
}
export default connect(
    state => ({...state.AddPanel }),
    dispatch => ({
      onInputChange: event =>
        dispatch(changeInputValue(event.target.name, event.target.value)),
      add: title => dispatch(addWidget(title)),
      toggle: () =>  dispatch(toggleAddPanel()),
      clear: () => dispatch(changeInputValue("title", "")),
    })
  )(AddSheetMusicForm)