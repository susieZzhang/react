import { CHANGE_INPUT_VALUE, ADD_ITEM, DEL_ITEM } from './actionType'
export const changeInputValue = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})
export const addItem = () => ({
    type: ADD_ITEM
})

export const delIem = (index) => ({
    type: DEL_ITEM,
    index
})