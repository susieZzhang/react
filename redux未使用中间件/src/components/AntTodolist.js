import React, { Component } from 'react'
import 'antd/dist/antd.css'
import store from '../store'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction ,initListAction} from '../store/actionCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios'
export default class AntTodolist extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.itemDelete = this.itemDelete.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        itemDelete={this.itemDelete}
      />
    )
  }
  componentDidMount() {
    axios.get('/list.json').then(res => {
      const data = res.data
      const action = initListAction(data)
      store.dispatch(action)
    })

  }
  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handleStoreChange() {
    this.setState(store.getState())
  }
  handleBtnClick() {
    const action = getAddItemAction()
    store.dispatch(action)
  }
  itemDelete(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
}