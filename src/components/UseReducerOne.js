import React from 'react'
import { useReducer } from 'react'

const initialState = 0;
const reducer = (currentState, action) => {
    switch (action) {
        case 'increment':
            return currentState + 1;
        case 'decrement':
            return currentState - 1;
        case 'reset':
            return initialState;    
        default:
            return currentState;
    }
}

function UseReducerOne() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h3>useReducer() hook</h3>
            <h4>Count : {count}</h4>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default UseReducerOne
