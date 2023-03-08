import React from 'react';
import ReactDOM from 'react-dom/client';

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        case 'ZERO':
            return 0
        default: // if none of the above matches, code comes here
            return state
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div>Hello World!</div>);
