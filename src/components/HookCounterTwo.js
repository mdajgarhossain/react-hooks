import React from 'react';
import { useState } from 'react';

const HookCounterTwo = () => {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    console.log(count);

    const incrementFive  = () => {
        for(let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1);
        }
    };
    console.log(count);

    return (
        <div>
            Count: {count}
            <br/>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={incrementFive}>Increment5</button>
        </div>
    );
};

export default HookCounterTwo;