import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class TodoItem extends Component {
    constructor(props) {
        super(props)
        // 当组件的state或者props发生改变时，render函数就会重新执行
        this.handleClick = this.handleClick.bind(this)
    }
    // 提升react性能点
    // 1、将事件的this绑定放到constructor里,组件只渲染一次，提升性能
    // 2、 setState内置性能提升机制
    // 3、 react底层虚拟DOM
    // 4、shouldComponentUpdate
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return true
        } else {
            return false
        }
    }
    render() {
        return (<div onClick={this.handleClick}>{this.props.content}</div>)
    }
    handleClick() {
        this.props.deleteItem(this.props.index)
    }
    // 一个组件要从父组件接收参数
    // 只要父组件的render函数被执行了，子组件的这个生命周期函数就会被执行
    // 如果这个组件第一次存在于父组件中，不会执行
    // 如果这个组件之前已经存在于父组件中，才会执行
    componentWillReceiveProps() {
        console.log('child componentWillReceiveProps')
    }
    componentWillUnmount() {
        console.log('child componentWillUnmount')
    }
}
TodoItem.propTypes = {
    content: PropTypes.string.isRequired, // 必传
    deleteItem: PropTypes.func,
    index: PropTypes.number
}
// 设置父组件没有传时候的默认值
TodoItem.defaultProps = {
    content: 'hello word'
}

