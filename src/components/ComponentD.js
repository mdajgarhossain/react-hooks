import React from 'react'
import { UserConsumer } from './userContext'

function ComponentD() {
    return (
        <div>
            <h4> Create context in another js file and export it</h4>
            <h6>Using context value by Consumer component</h6>
            <UserConsumer>
                {
                    user => {
                        return <div>Context value is: '{user}'</div>
                    }
                }
            </UserConsumer>
            
        </div>
    )
}

export default ComponentD
