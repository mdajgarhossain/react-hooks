import React, { useState } from 'react'

function FunctionalComponentRenderPropsImplementation(props) {
    // console.log(props);
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
            {props.renderProps(nameFromBtnClick, handleChange, handleClick)}
        </div>
    )
}

export default FunctionalComponentRenderPropsImplementation
