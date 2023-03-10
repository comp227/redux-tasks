import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import {applyMiddleware, configureStore} from '@reduxjs/toolkit'

import App from './App'
import taskService from './services/tasks'
import taskReducer, {appendTask} from './reducers/taskReducer'
import filterReducer from "./reducers/filterReducer";

const store = configureStore({
    reducer: {
        tasks: taskReducer,
        filter: filterReducer
    }
})

taskService.getAll().then(tasks =>
    tasks.forEach(task => {
        store.dispatch(appendTask(task))
    })
)

console.log(store.getState())

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)
