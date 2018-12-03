import { CHANGE_INPUT_ALUE, ADD_TODO_ITEM, DELETE_ITEM, INIT_LIST } from './actionTypes'
export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_ALUE,
    value
})
export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})

export const initListAction = (list) => ({
    type: INIT_LIST,
    list
})