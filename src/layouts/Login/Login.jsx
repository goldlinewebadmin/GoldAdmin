import React, { Component } from 'react';
import './Login.css';

import CustomFetch from '../../components/CustomFetch/CustomFetch.jsx'

import { Redirect } from 'react-router-dom'


export class Login extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  state = {
    username: "",
    password: "",
    login: false
  };

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {

    event.preventDefault();

    CustomFetch.post('/api/auth/account/login',{

      username: this.state.username,

      password: this.state.password,
      }, this.state.username)
      
      .then(response =>{

        if (response.ok) {
          this.setState({login: true})
  
        } else if (response.status == 400) {
            this.setState({login: false})
            alert("Email y/o Contraseña Incorrectos")
        } else {
            this.setState({login: false})
            alert("Hubó Un Error En El Servidor")
        }
    })
    

      
   
    // HybridEncrypter.encryptInput(PrivateIp.ip, this.state.username)

    // .then(response => {

    //   fetch('/api/auth/account/login', {

    //     method: 'POST',

    //     headers: {
    //         'Accept': 'application/json',

    //         'Content-Type': 'application/json',

    //         'Symmetric-Key-Encrypted': response.cipherSymmetricKey,
    //         'private-ip': response.cipherText
    //     },
    //     body: JSON.stringify({

    //         username: this.state.username,

    //         password: this.state.password,
    //     })
        
    //     })
        
    // })
  }


  render () {
    if(this.state.login){
      return <Redirect to='/'/>
    }
    return (
        
            <div className="login">

                <h1><img src="https://goldlineweb.github.io/img/lineas%20logo.png" width="68px" height="68px"/></h1>

                <div >

                    <input placeholder="Username" type="text" name="username" onChange={this.handleChange} />
                    <input placeholder="Password" type="password" name="password" onChange={this.handleChange}/>

                    <input type="submit" value="Log In" disabled={!this.validateForm()} onClick={this.handleSubmit}/>
                    <br></br>

                </div>

                <div className="divider"><b>OR</b></div>

                <div className="forgotwrapper">
                  <div className="forgot">
                    <a href="https://instagram.com">Forgot password?</a>
                  </div>
                </div>   
            </div>
            
    );
  }
}


export default Login;