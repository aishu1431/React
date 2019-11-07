import React, { Component } from 'react'

export class Form1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             FirstName:"",
             LastName:"",
             email:"",
             password:"",
             checked:false,
             FirstNameError:"",
             lastNameError:"",
             emailError:"",
             passwordError:"",
            
        }
    }
    firstNameChange=(event)=>{
        this.setState({
        FirstName:event.target.value
        })
    }

    lastNameChange=(event)=>{
        this.setState({
        LastName:event.target.value
        })
    }
    emailChange=(event)=>{
        this.setState({
        email:event.target.value
        })
    }
    passwordChange=(event)=>{
        this.setState({
        password:event.target.value
        })
    }
    checkboxChange=(event)=>{
        this.setState({
        checked:event.target.value
        })
    }
    validate=()=>{
        if(!this.state.FirstName){
        alert("please fill the firstName")
            }
        
    
            else if(!this.state.LastName){
                alert("please fill the last name")
            }
                else if(!this.state.email.includes("@")){
                    alert("email id incorrect")
                }
                   else if(!this.state.password.length > 5){
                        alert("passwor poor")
                    }
                       else if(this.state.checked===false){
                                alert("the checkbox is not validated");
                        }
                        
                        else{
                            alert("the form is validated sucefully")
                        }
                            
                            
                                
                        
                        }
                        validateNew=()=>{
                            const val=this.validate()
                               console.log(this.state)
                            }
                        

    
    render() {
        return (
            <div>
            <label for="Firstname" >FirstName:</label>
                <input type="text"
                name="FirstName"
                value={this.state.FirstName}
                onChange={this.firstNameChange} />
                <br/>

                <label for="LastName">LastName</label>
                <input type="text"
                name="LastName"
                value={this.state.LastName}
                onChange={this.lastNameChange} />
                <br />
                <label for="email">email</label>

                <input type="text"
                name="email"
                value={this.state.email}
                onChange={this.emailChange} />
                <br/>
                <label for="passowrd">password</label>

                <input type="password"
                name="password"
                value={this.password}
                onChange={this.passwordChange} />
                <br />
                <label for="checkbox">validate</label>

                <input type="checkbox"
                name="checkbox" 
                value={this.state.checked }
                onChange={this.checkboxChange} />
                <br/>
                <label for="submit">submit</label>

                <input type="submit"
                onClick={this.validateNew} />
            </div>
        )
    
}
}
export default Form1
