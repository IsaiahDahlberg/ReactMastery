import { TOGGLE_WIDGET, ADD_WIDGET, TOGGLE_ADD_PANEL, CHANGE_INPUT_VALUE, DELETE_WIDGET } from "./actionTypes";

let nextId = 10;

export const changeInputValue = (name, value) => ({
    type: CHANGE_INPUT_VALUE,
    name, 
    value
 })

export const toggleAddPanel = () => ({
    type: TOGGLE_ADD_PANEL,
    payload: { }
})

export const deleteWidget = (id) =>({
    type: DELETE_WIDGET,
    payload: { id }
})

export const addWidget = title =>({
    type: ADD_WIDGET,
    payload: {
        id: ++nextId,
        title
    }
})

export const toggleWidget = id => ({
    type: TOGGLE_WIDGET,
    payload: { id }
});