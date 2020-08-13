import React, { createContext } from 'react';
import { useState } from 'react';

export const AuthContext = createContext();

function AuthContextProvider(props) {
    const [userAuth, setUserAuth] = useState({
        isAuthenticated: false
    });

    const toggleAuth = () => {
        setUserAuth({isAuthenticated: !userAuth.isAuthenticated});
    }

    return (
        <AuthContext.Provider value={{...userAuth, toggleAuth: toggleAuth}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
