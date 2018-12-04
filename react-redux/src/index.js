import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider } from 'react-redux'
import store from './store'
// Provider 连接到store,从而它内部的组件都有能力获取到store
const App = (
    <Provider store={store}>
        <TodoList />
    </Provider>
)
ReactDOM.render(App, document.getElementById('root'))
