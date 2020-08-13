import React from 'react'
import { ThemeContext } from './contexts/ThemeContext';
import { AuthContext } from './contexts/AuthContext';

function Navbar() {
    return (
        <ThemeContext.Consumer>
            {
                (themeContext) => {
                    const {isLightTheme, light, dark} = themeContext;
                    const theme = isLightTheme ? light : dark;
                    return(
                        <AuthContext.Consumer>
                            {
                                (authContext) => {
                                    const {isAuthenticated, toggleAuth} = authContext
                                    return(
                                        <nav style={{background: theme.ui, color: theme.syntax}}>
                                            <h1>Context App</h1>
                                            <div onClick={toggleAuth}>
                                                {
                                                    isAuthenticated ? 'Logged in' : 'Logged out'
                                                }
                                            </div>
                                            <ul>
                                                <li>Home</li>
                                                <li>About</li>
                                                <li>Contact</li>
                                            </ul>
                                        </nav>
                                    )
                                }
                            }
                        </AuthContext.Consumer>
                    )
                }
            }
        </ThemeContext.Consumer>
    )
}

export default Navbar
