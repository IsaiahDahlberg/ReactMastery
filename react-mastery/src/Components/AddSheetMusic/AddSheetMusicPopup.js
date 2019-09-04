import React from "react"
import { connect } from "react-redux"
import { getAddPanelToggleStatus } from "../../Redux/selectors"
import { toggleAddPanel } from "../../Redux/actions"
import AddSheetMusicForm from "./AddSheetMusicForm"
import "../../Styles/AddSheetMusicPopup.css"

const AddSheetMusicPopup = ( { showAddPanel, toggleAddPanel } ) => {
    return(
        <div>
            
            { showAddPanel ?
                    (<div className="AddSheetMusicPopup">
                        <AddSheetMusicForm />
                        <button onClick={()=>toggleAddPanel()}>Cancel</button>
                    </div>) 
                : 
                <button onClick={()=>toggleAddPanel()}>Add</button>
            } 
        </div>   
     )    
}

const mapStateToProps = state =>{
    const showAddPanel = getAddPanelToggleStatus(state)
    return { showAddPanel }
} 

export default connect(mapStateToProps,{toggleAddPanel})(AddSheetMusicPopup)