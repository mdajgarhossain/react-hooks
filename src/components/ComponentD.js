import React from 'react'
import { UserConsumer } from './userContext'
import { useContext } from 'react'
import { UserContext } from './userContext';

function ComponentD() {
    const user = useContext(UserContext);
    console.log(user);

    return (
        <div>
            <h4> Create context in another js file and export it</h4>
            <h6>Using context value by Consumer component</h6>
            <UserConsumer>
                {
                    userr => {
                        return <div>Context value is: '{userr}'</div>
                    }
                }
            </UserConsumer>
            <h6>Using context value by useContext() hook</h6>
            <div>Context value is: '{user}'</div>
            
        </div>
    )
}

export default ComponentD
