import React from 'react';
import ReactDOM from 'react-dom/client';

const counterReducer = (state, action) => {
    if (action.type === 'INCREMENT') {
        return state + 1
    } else if (action.type === 'DECREMENT') {
        return state - 1
    } else if (action.type === 'ZERO') {
        return 0
    }

    return state
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div>Hello World!</div>);
