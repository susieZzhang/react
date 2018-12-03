// import axios from 'axios'
import { CHANGE_INPUT_ALUE, ADD_TODO_ITEM, DELETE_ITEM, INIT_LIST,GET_INIT_LIST } from './actionTypes'
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
// 使用redux-thunk之后,action不再限于是一个对象
// export const getTodoList = () => {
//     return (dispatch) => {
//         axios.get('/list.json').then(res => {
//             const data = res.data
//             const action = initListAction(data)
//             dispatch(action)
//         })
//     }
// }
export const getInitList = () => ({
    type: GET_INIT_LIST
})