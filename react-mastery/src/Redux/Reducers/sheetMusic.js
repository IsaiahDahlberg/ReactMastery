import { ADD_WIDGET, TOGGLE_WIDGET } from "../actionTypes";

const initialState = {
    allIds: [],
    byIds: {}
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
                completed: !state.byIds[id].completed
            }
            }
        };
    }
    default:
    return state;
}
}
