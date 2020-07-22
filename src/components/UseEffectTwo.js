import React, { useState, useEffect } from 'react';

const UseEffectTwo = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('Updating document title');
        document.title = `Clicked ${count} times`;
        // console.log('useEffect invoked!!!');
    }, [count]);

    return (
        <div>
            <input 
                type="text" 
                value={name} 
                onChange={event => setName(event.target.value)}
            />
            <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
        </div>
    );
};

export default UseEffectTwo;