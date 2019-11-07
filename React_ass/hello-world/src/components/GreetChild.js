import React from 'react'
import { tsPropertySignature } from '@babel/types'

function GreetChild(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('aishya')}>greet Parent</button>
        </div>
    )
}

export default GreetChild
