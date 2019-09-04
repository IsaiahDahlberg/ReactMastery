import { TOGGLE_ADD_PANEL, CHANGE_INPUT_VALUE } from "../actionTypes";

const initialState = {
    showAddPanel: false
};
  
export default function(state = initialState, action) {
  const { type, name, value } = action;
  switch (type) {
      case TOGGLE_ADD_PANEL: {
          return {
            ...state,
            showAddPanel: !state.showAddPanel
          };
        }
      case CHANGE_INPUT_VALUE: {
        return { ...state, 
                    [name]: value}
      }
      default:
      return state;
  }
}
