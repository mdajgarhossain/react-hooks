import React from 'react';

const UserContext = React.createContext('Ajgar Hossain Jewell');

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserContext, UserProvider, UserConsumer }