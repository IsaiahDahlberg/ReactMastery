import { ADD_WIDGET, TOGGLE_WIDGET } from "../actionTypes";

const initialState = {
    allIds: [ 1, 2, 3],
    byIds: { 1: "title", 2: "2nd title", 3: "thirds title" }
};
  
export default function(state = initialState, action) {
switch (action.type) {
    case ADD_WIDGET: {
        const { id, content } = action.payload;
        return {
          ...state,
          allIds: [...state.allIds, id],
          byIds: {
            ...state.byIds,
            [id]: {
              content,
            }
          }
        };
      }
    case TOGGLE_WIDGET: {
    const { id } = action.payload;
        return {
            ...state,
            byIds: {
            ...state.byIds,
            [id]: {
                ...state.byIds[id],
                focus: !state.byIds[id].focus
            }
            }
        };
    }
    default:
    return state;
}
}
