import React, { useState } from 'react'

function FunctionalComponentRenderPropsOne(props) {
    // console.log(props);
    const {name, handleName, submitName} = props;
    return (
        <div>
            <form>
                <label htmlFor="name">Name: </label>
                <input 
                    type="text" 
                    id="name" 
                    placeholder="Enter your name"
                    onChange={handleName}
                />
            </form>
            <button onClick={submitName}>Submit</button>
            <h3>My name is {name}</h3>
        </div>
    )
}

export default FunctionalComponentRenderPropsOne
