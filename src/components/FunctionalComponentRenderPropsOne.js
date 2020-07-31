import React, { useState } from 'react'

function FunctionalComponentRenderPropsOne() {
    const [name, setName] = useState('');
    const [nameFromBtnClick, setNameFromBtnClick] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    }
    const handleClick = () => {
        setNameFromBtnClick(name);
    }

    return (
        <div>
            <form>
                <label htmlFor="name">Name: </label>
                <input 
                    type="text" 
                    id="name" 
                    placeholder="Enter your name"
                    value={name} 
                    onChange={handleChange}
                />
            </form>
            <button onClick={handleClick}>Submit</button>
            <h3>My name is {nameFromBtnClick}</h3>
        </div>
    )
}

export default FunctionalComponentRenderPropsOne
