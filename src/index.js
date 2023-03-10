import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import App from './App'
import taskReducer from './reducers/taskReducer'
import filterReducer from "./reducers/filterReducer";

const store = configureStore({
    reducer: {
        tasks: taskReducer,
        filter: filterReducer
    }
})

console.log(store.getState())

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)
