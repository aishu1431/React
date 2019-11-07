import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName: '',
        lastName:'',
        email: '',
        firstnameError: '',
        lastnameError:'',
        emailError: '',
        
      };
    }
  
    FirstNameChange = event => {
      this.setState({ firstName: event.target.value 
      });
    };
    LastNameChange = event => {
        this.setState({ lastName: event.target.value }, () => {
          this.validatelastName();
        });
      };
      checkBoxChange=event=>{
          this.setState({checkbox:event.target.value},()=>{
              this.validateCheck();
          })
      }
  
    handleEmailChange = event => {
      this.setState({ email: event.target.value }, () => {
        this.validateEmail();
      });
    };
  
    validatefirstName = () => {
      const { firstName } = this.state;
      this.setState({
        firstnameError:
          firstName.length > 3 ? null : 'Name must be longer than 3 characters'
      });
    }
    validatelastName = () => {
        const { lastName } = this.state;
        this.setState({
          lastnameError:
            lastName.length > 3 ? null : 'Name must be longer than 3 characters'
        });
      }
    //   validateCheck=()=>{
    //       const{checkbox}=this.state;
    //       this.setState({
    //          (typeOf checkbox) ? checked : value
    //       )};
    //   }
  
    validateEmail = () => {
      const { email } = this.state;
      this.setState({
        emailError:
          email.length > 3 ? null : 'Email must be longer than 3 characters'
      });
    }
  
    handleSubmit = event => {
      event.preventDefault();
      const {firstName,lastName, email } = this.state;
      alert(`Your state values: \n 
              firstName: ${firstName} \n
              lastName:${lastName} \n
              email: ${email}`);
    };
    
  
    render() {
      return (
          <div className="style">
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label For='name'>FirstName:</label>
            <br/>
            <input
              name='firstName'
              placeholder='Enter firstname'
              value={this.state.firstName}
              onChange={this.FirstNameChange}
            />
            <p>{this.state.firstnameError}</p>
          </div>
            <br />
            <div className='form-group'>
            <label For='name'>LastName:</label>
            <br />
            <input
              name='lastName'
              placeholder='Enter lastname'
              value={this.state.lastName}
              onChange={this.LastNameChange}
              />
            <p>{this.state.lastnameError}</p>
          </div>
          <br />
          <div className='form-group'>
            <label For='email'>Email</label>
            <br />
            <input
              name='email'
              placeholder='Enter email'
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
            <p>{this.state.emailError}</p>
          </div>
          {/* <div className='form-group'>
            <label For='checkbox'>checkBox</label>
            <input
              type='checkbox'
               
               value={this.state.checkbox}
               onChange={this.checkBoxChange}
                 required />
            
          </div> */}

          <button type='submit'>
            Submit
          </button>
        </form>
        </div>
      );
    }
  }
  


export default Form
