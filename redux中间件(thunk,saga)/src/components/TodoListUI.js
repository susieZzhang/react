import React, { Fragment } from 'react'
// import React, { Component, Fragment } from 'react'
import { Input, Button, List } from 'antd'
// 无状态组件,当一个组件只有render函数时，建议用无状态组件，性能更好
const TodoListUI = (props) => {
    return (
        <Fragment>
            <div style={{ marginLeft: '10px', marginTop: '10px' }}>
                <Input
                    value={props.inputValue}
                    placeholder="todo info"
                    style={{ width: '300px', marginRight: '10px' }}
                    onChange={props.handleInputChange}
                />
                <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
            </div>
            <List
                style={{ width: '300px', marginTop: '10px', marginLeft: '10px' }}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (<List.Item onClick={() => { props.itemDelete(index) }}>{item}</List.Item>)}
            />
        </Fragment>
    )
}
export default TodoListUI
// export default class TodoListUI extends Component {
//     render() {
//         return (
//             <Fragment>
//                 <div style={{ marginLeft: '10px', marginTop: '10px' }}>
//                     <Input
//                         value={this.props.inputValue}
//                         placeholder="todo info"
//                         style={{ width: '300px', marginRight: '10px' }}
//                         onChange={this.props.handleInputChange}
//                     />
//                     <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
//                 </div>
//                 <List
//                     style={{ width: '300px', marginTop: '10px', marginLeft: '10px' }}
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item, index) => (<List.Item onClick={(index) => { this.props.itemDelete(index) }}>{item}</List.Item>)}
//                 />
//             </Fragment>
//         )
//     }
// }