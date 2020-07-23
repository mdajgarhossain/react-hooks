import React, { useState, useEffect } from 'react'

function HookMouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    // const [count, setCount] = useState(0);

    const logMousePosition = event => {
        console.log('Mouse Event');
        setX(event.clientX);
        setY(event.clientY);
    }

    useEffect(() => {
        console.log('UseEffect called!');
        window.addEventListener('mousemove', logMousePosition);
        // document.title = `Clicked ${count} times`;
    }, []);

    return (
        <div>
            X - {x} Y - {y}
            {/* <button onClick={() => setCount(count+1)}>click {count} times</button> */}
        </div>
    )
}

export default HookMouse
