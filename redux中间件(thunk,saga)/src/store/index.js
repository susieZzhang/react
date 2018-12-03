import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import mySaga from './saga'
const sagaMiddleWare = createSagaMiddleware()
// const store = createStore(reducer, applyMiddleware(thunk))
const store = createStore(reducer, applyMiddleware(sagaMiddleWare))
sagaMiddleWare.run(mySaga)
export default store