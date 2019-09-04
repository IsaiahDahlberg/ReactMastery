import { ADD_WIDGET, TOGGLE_WIDGET, DELETE_WIDGET } from "../actionTypes";

const initialState = {
    toggleWidget: null,
    sheetMusic: [
                  {id: 1, title: "Fur Elise"},
                  {id: 2, title: "Ashkon Farewell"},
                  {id: 3, title: "You got a Friend in me"},
                  {id: 4, title: "Riders of Rohan"},
                  {id: 5, title: "Golum's Theme"},
                  {id: 6, title: "Pomp and Circumstnace"},
                  {id: 7, title: "Golden Anniversary"}
                ]
};
  
export default function(state = initialState, action) {
  console.log( action.type)
  switch (action.type) {
      case ADD_WIDGET: {
          const { id, title } = action.payload;
          return {
            ...state,
              sheetMusic: [ ...state.sheetMusic, { id: id, title: title}]
          };
        }
      case TOGGLE_WIDGET: {
        const { id } = action.payload;
            return {
                ...state,
                  toggleWidget: id            
            };
        }
      case DELETE_WIDGET: {
        const { id } = action.payload;
          return{
            ...state,
              sheetMusic: [ ...state.sheetMusic.slice(0, id) , ...state.sheetMusic(id + 1) ]
          }
      }
      default:
      return state;
  }
}
