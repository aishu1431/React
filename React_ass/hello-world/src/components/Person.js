import React from 'react'

function Person({person}) {
    return (
        <div>
             <h1>{person.name} a.k.a {person.id} a.k.a {person.skill}</h1>
        </div>
    )
}

export default Person
