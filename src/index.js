import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import App from './App'
import taskReducer from './reducers/taskReducer'
import filterReducer from "./reducers/filterReducer";

const reducer = combineReducers({
    tasks: taskReducer,
    filter: filterReducer
})

const store = createStore(reducer)
console.log(store.getState())

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        {/*<App />*/}
        <div/>
    </Provider>
)
