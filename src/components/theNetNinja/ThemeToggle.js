import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './contexts/ThemeContext';
import { AuthContext } from './contexts/AuthContext';

function ThemeToggle() {
    const {toggleTheme} = useContext(ThemeContext);
    const {isAuthenticated} = useContext(AuthContext);

    return (
        <div>
            <button onClick={toggleTheme}>Toggle the theme</button>
            <br/>
            {
                isAuthenticated ? 'Hello User' : 'Please log in'
            }
        </div>
    )
}

export default ThemeToggle
