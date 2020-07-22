import React, { useState, useEffect } from 'react';

const UseEffectTwo = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Updating document title');
        document.title = `Clicked ${count} times`;
        // console.log('useEffect invoked!!!');
    }, [count]);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
        </div>
    );
};

export default UseEffectTwo;