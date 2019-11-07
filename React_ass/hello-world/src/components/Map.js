import React from 'react'
// import Person from './Person'

function Map() {
    // const persons=[
    //     {
    //         id:1,
    //         name:'Bruce',
    //         age:30,
    //         skill:'React'
    //     },
    //     {
    //         id:2,
    //         name:'clark',
    //         age:25,
    //         skill:'angular'
    //     },
    //     {
    //     id:3,
    //     name:'Diana',
    //     age:28,
    //     skill:'typescript'
    //  },
    //  {
    //     id:3,
    //     name:'Diana',
    //     age:28,
    //     skill:'typescript'
    //  }


//]
const names=['aishu','pruthvi','sanjay']
    
    return (
        <div>
           {/* {persons.map ((element,index) => <Person key={index} person={element} />)}  */}
           {names.map((name)=><h1 key={name}>{name}</h1>)}

           
        </div>
    )
}

export default Map
