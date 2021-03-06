import React, { useState, useEffect } from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(prevCount => prevCount + 1);
        // console.log('re-rendering...');
    }

    useEffect(() => {
        // function doSomething() {
        //     console.log(someProps);
        // }
        // doSomething();

        const interval = setInterval(tick, 1000);
        console.log('useEffect called');

        return () => {
            clearInterval(interval)
        }
    }, []);

    return (
        <div>
            <h2>{count}</h2>
        </div>
    )
}

export default IntervalHookCounter
