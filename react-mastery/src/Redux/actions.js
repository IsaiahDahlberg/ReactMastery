import { TOGGLE_WIDGET, ADD_WIDGET } from "./actionTypes";

let nextId = 10;

export const addWidget = content =>({
    type: ADD_WIDGET,
    payload: {
        id: ++nextId,
        content
    }
})

export const toggleWidget = id => ({
    type: TOGGLE_WIDGET,
    payload: { id }
});