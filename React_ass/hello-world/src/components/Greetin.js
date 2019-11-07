import React from 'react'
import UserGreet from './UserGreet'
import GuestGreeting from './GuestGreeting'

function Greetin(props) {
    const isLoggedIn = props.isLoggedIn
    if(isLoggedIn===false){
        return <UserGreet />
    }
    else{
        return <GuestGreeting />
    }
}

export default Greetin
