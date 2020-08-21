import React from 'react'
import { useReducer } from 'react'

const initialState = {
    firstCounter: 0
};
const reducer = (currentState, action) => {
    switch (action.type) {
        case 'increment':
            return {firstCounter: currentState.firstCounter + action.value};
        case 'decrement':
            return {firstCounter: currentState.firstCounter - action.value};
        case 'reset':
            return initialState;    
        default:
            return currentState;
    }
}

function UseReducerTwo() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h3>useReducer() hook</h3>
            <h4>Count : {count.firstCounter}</h4>
            <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
            <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment 5</button>
            <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement 5</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}

export default UseReducerTwo
