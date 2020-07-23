import React, { useState, useEffect } from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(count + 1);
        // console.log('re-rendering...');
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000);
        console.log('useEffect called');

        return () => {
            clearInterval(interval)
        }
    }, [count]);

    return (
        <div>
            <h2>{count}</h2>
        </div>
    )
}

export default IntervalHookCounter
