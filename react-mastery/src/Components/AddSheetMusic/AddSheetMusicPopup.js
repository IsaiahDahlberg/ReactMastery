import React from "react"
import { connect } from "react-redux";
import { getAddPanelToggleStatus } from "../../Redux/selectors";
import "../../Styles/AddSheetMusicPopup.css"

const AddSheetMusicPopup = ( { showAddPanel } ) => {
    return(
        <div>
            { showAddPanel ?
                (<div className="AddSheetMusicPopup">
                     <h1>AddSheetMusicPopup</h1>
                </div>) : "null"
            } 
        </div>   
     )    
}

const mapStateToProps = state =>{
    const showAddPanel = getAddPanelToggleStatus(state)
    return { showAddPanel }
} 

export default connect(mapStateToProps)(AddSheetMusicPopup)