import React, { createContext, useState} from 'react';

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
    // console.log(props);
    const [themeState, setThemeState] = useState({
        isLightTheme: true,
        light: {syntax: '#555', ui: '#ddd', bg: '#eee'},
        dark: {syntax: '#ddd', ui: '#333', bg: '#555'}
    });

    const toggleTheme = () => {
        setThemeState({...themeState, isLightTheme: !(themeState.isLightTheme)});
    };

    return (
        <ThemeContext.Provider value={{...themeState, toggleTheme: toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
