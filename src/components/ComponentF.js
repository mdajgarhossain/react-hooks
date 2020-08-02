import React, { useContext } from 'react';
import {UserContext, ChannelContext} from '../App';
import {DeveloperContext} from './ComponentC';

function ComponentF() {
    const developer = useContext(DeveloperContext);
    console.log(developer);

    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                        return (
                                            <div>
                                                User context value: {user},
                                                Channel context value: {channel}
                                            </div>
                                        )
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
            <h4>Consume context value with useContext() hook</h4>
            <h3>Developer's name: {developer.name}</h3>
        </div>
    )
}

export default ComponentF  
