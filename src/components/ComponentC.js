import React, { useState } from 'react'
import ComponentE from './ComponentE'

let user = {};
export const DeveloperContext = React.createContext();

function ComponentC() {
    const [developer, setDeveloper] = useState(user);

    const handleChange = (event) => {
        setDeveloper({name: event.target.value});
    }

    return (
        <div>
            <form>
                <label htmlFor="name">Name: </label>
                <input 
                    type="text" 
                    id="name" 
                    placeholder='Enter your name' 
                    onChange={handleChange}
                />
            </form>
            {
               developer.name ? `My name is ${developer.name} and I am a developer.` : ''
            }
            <DeveloperContext.Provider value={developer}>
                <ComponentE />
            </DeveloperContext.Provider>
        </div>
    )
}

export default ComponentC
