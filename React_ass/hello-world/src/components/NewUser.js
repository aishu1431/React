import React from 'react'

const NewUser =(props)=>{
    return(
    <div>
    <ul>
    <li>
        <span>name:{props.children}</span>
    </li>
    </ul>
    </div>
    )
}

export default NewUser
