import React from 'react'
import { ThemeContext } from './contexts/ThemeContext';

function Navbar() {
    return (
        <ThemeContext.Consumer>
            {
                themeState => {
                    const {isLightTheme, light, dark} = themeState;
                    const theme = isLightTheme ? light : dark;
                    return(
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
            }
        </ThemeContext.Consumer>
    )
}

export default Navbar
