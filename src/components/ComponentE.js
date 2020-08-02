import React, {useContext} from 'react'
import ComponentF from './ComponentF'
import {UserContext, ChannelContext} from '../App';

function ComponentE() {
    const user = useContext(UserContext);
    // console.log(user);
    const channel = useContext(ChannelContext);
    return (
        <div>
            <ComponentF />
            <h4>Another approach to consume context value</h4>
            <div>
                UserContext: {user},
                ChannelContext: {channel}
            </div>
        </div>
    )
}

export default ComponentE
