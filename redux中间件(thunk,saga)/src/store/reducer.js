import { CHANGE_INPUT_ALUE, ADD_TODO_ITEM, DELETE_ITEM, INIT_LIST } from './actionTypes'
const defaultState = {
    inputValue: '123',
    list: [1, 2]
}
// reducer可以接受state,但是不能修改state
// 纯函数指的是，给定固定的输入，就一定会有固定的输出，而且不会有任何副作用 
export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_ALUE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if (action.type === DELETE_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }

    if (action.type === INIT_LIST) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.list
        return newState
    }
    return state
}