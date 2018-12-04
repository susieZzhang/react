import React from 'react'
import { connect } from 'react-redux'
import { changeInputValue, addItem, delIem } from './store/actionCreator'
const TodoList = (props) => {
    const { inputValue, list, changeInputVal, addList, handleDel } = props
    return (
        <div>
            <div>
                <input value={inputValue} onChange={changeInputVal}></input>
                <button onClick={addList}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return (
                            <li key={index} onClick={handleDel.bind(this, index)}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
// 把store中的state映射到该组件中的props中
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
// 将store的dispatc方法挂载到props上
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputVal(e) {
            const action = changeInputValue(e.target.value)
            dispatch(action)
        },
        addList() {
            const action = addItem()
            dispatch(action)
        },
        handleDel(index) {
            const action = delIem(index)
            dispatch(action)
        }
    }
}
// 将store与TodoList做连接
// 把store中的state映射到该组件中的props中
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)