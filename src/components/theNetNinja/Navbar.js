import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './contexts/ThemeContext';

function Navbar() {
    const themeState = useContext(ThemeContext);
    console.log(themeState);
    const {isLightTheme, light, dark} = themeState;
    const theme = isLightTheme ? light : dark;

    return (
        <nav style={{background: theme.ui, color: theme.syntax}}>
            <h1>Context App</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
        </nav>
    )
}

export default Navbar
