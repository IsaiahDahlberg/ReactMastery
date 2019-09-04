import { TOGGLE_ADD_PANEL } from "../actionTypes";

const initialState = {
    showAddPanel: true
};
  
export default function(state = initialState, action) {
  switch (action.type) {
      case TOGGLE_ADD_PANEL: {
          return {
            ...state,
            showAddPanel: !state.showAddPanel
          };
        }
      default:
      return state;
  }
}
