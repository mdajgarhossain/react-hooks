import React from 'react'
import { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
};
const reducer = (currentState, action) => {
    switch (action.type) {
        case 'increment':
            return {...currentState, firstCounter: currentState.firstCounter + action.value};
        case 'decrement':
            return {...currentState, firstCounter: currentState.firstCounter - action.value};
        case 'increment2nd':
            return {...currentState, secondCounter: currentState.secondCounter + action.value};
        case 'decrement2nd':
            return {...currentState, secondCounter: currentState.secondCounter - action.value};
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
            <h4>First Counter : {count.firstCounter}</h4>
            <h4>Second Counter : {count.secondCounter}</h4>
            <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
            <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment 5</button>
            <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement 5</button>
            <button onClick={() => dispatch({type: 'increment2nd', value: 1})}>Increment 2nd</button>
            <button onClick={() => dispatch({type: 'decrement2nd', value: 1})}>Decrement 2nd</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}

export default UseReducerTwo
