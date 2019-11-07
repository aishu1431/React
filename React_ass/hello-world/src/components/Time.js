import React from 'react'

function Time() {
    let time = new Date().getHours();
    console.log(time);
    let day = time % 12;
    console.log(day);
    let timeOfDay
    var styles={
        fontSize:'30px',
        
       
    }

        if(day <19){
            timeOfDay = "morning"
            styles.color="green"
        }
        else if(day >= 12 && day < 17){
            timeOfDay = "afternoon"
            styles.color="powderblue"
        }
        else {
            timeOfDay = "night"
             styles.color="yellow"
        }
       
            
        return (
            // <h1 style={{color:'powderblue', backgroundColor:'red'}}>Good {timeOfDay}</h1> //this is one method of inline style

             <h1 style = {styles} >Good {timeOfDay}!</h1>
        )
       
}

export default Time
