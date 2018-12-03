import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import './style.css'
export default class Todolist extends Component {
    // 当父组件的render函数被运行时候
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
        this.submitValue = this.submitValue.bind(this)
        this.delItem = this.delItem.bind(this)
    }
    // 在组件即将被挂载到页面的时刻自动执行
    componentWillMount() {
        console.log('componentWillMount')
    }
    render() {
        console.log('render')
        return (
            <Fragment>
                <div>
                    {/* {jsx中注释的写法} */}
                    <label htmlFor="insert">输入内容</label>
                    <input type="text" id="insert" className="input" value={this.state.inputValue} onChange={this.inputChange}></input>
                    <button onClick={this.submitValue}>提交</button>
                </div>
                <ul ref={(ul) => { this.ul = ul }}>{this.getTodoItem()}</ul>
            </Fragment>
        )
    }
    // 组件被挂载到页面之后，自动被执行
    componentDidMount() {
        // 建议在该生命周期内发送ajax请求
        console.log('componentDidMount')
    }
    // 组件被更新之前，他会被自动执行
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        return true // 返回true时，组件进行更新，如果返回fasle则不会更新
    }
    // 组件被更新之前，它会自动执行，但是他在shouldComponentUpdate之后执行
    // 如果shouldComponentUpdate返回true则执行，如果返回false，则该函数不会执行
    componentWillUpdate() {
        console.log('componentWillUpdate')
    }
    // 组件更新完成之后，他会执行
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <div key={index}>
                    <TodoItem content={item} index={index} deleteItem={this.delItem} />
                    {/*<li key={index} onClick={this.delItem.bind(this, index)} dangerouslySetInnerHTML={{__html:item}}></li>*/}
                </div>

            )
        })
    }
    inputChange = (e) => {
        var value = e.target.value
        this.setState(() => ({
            inputValue: value
        }))
        // this.setState({
        //     inputValue: e.target.value
        // })
    }
    submitValue() {
        this.setState((prevState) => {
            return {
                list: [...prevState.list, prevState.inputValue],
                inputValue: ''
            }
        }, () => {
            // 在此处用法没有问题
            console.log(this.ul.querySelectorAll('div').length)
        })
        // this.setState是一个异步函数，所以会出现输出的ul下面的div的length比实际长度少1
        console.log(this.ul.querySelectorAll('div').length)
        // this.setState({
        //     list: [...this.state.list, this.state.inputValue],
        //     inputValue: ''
        // })
    }
    delItem(index) {
        this.setState((prevState) => {
            const list = [...prevState.list]
            list.splice(index, 1)
            return { list }
        })
        // const list = [...this.state.list]
        // list.splice(index, 1)
        // this.setState({
        //     list: list
        // })
    }
}