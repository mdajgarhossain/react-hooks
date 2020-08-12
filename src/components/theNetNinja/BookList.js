import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './contexts/ThemeContext';

function BookList() {
    const themeState = useContext(ThemeContext);
    const {isLightTheme, light, dark} = themeState;
    const theme = isLightTheme ? light : dark;

    return (
        <div className='book-list' style={{background: theme.bg, color: theme.syntax}}>
            <ul>
                <li style={{background: theme.ui}}>The old man and the sea</li>
                <li style={{background: theme.ui}}>Bela purabar age</li>
                <li style={{background: theme.ui}}>The alchemist</li>
            </ul>
        </div>
    )
}

export default BookList
