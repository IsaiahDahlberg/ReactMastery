import { TOGGLE_WIDGET, ADD_WIDGET, TOGGLE_ADD_PANEL } from "./actionTypes";

let nextId = 10;

export const toggleAddPanel = () => ({
    type: TOGGLE_ADD_PANEL,
    payload: { }
})

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