import React, { useState } from 'react'

function FunctionalComponentRenderPropsTwo(props) {
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
            <h3 onMouseOver={submitName}>Hover mouse here to submit</h3>
            <h3>My name is {name}</h3>
        </div>
    )
}

export default FunctionalComponentRenderPropsTwo
