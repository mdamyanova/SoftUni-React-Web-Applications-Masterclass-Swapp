import React, { Component } from 'react';
import SolidButton from './SolidButton';
import InputField from './InputField';
import './styles/LoginForm.style.css';
import { AUTH } from '../../constants';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errorMessage: this.props.errorMessage
    };
  }

  handleInputChange = ({ currentTarget }) => {
    this.setState({ [currentTarget.name]: currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const url =
      'http://softuni-swapp-212366186.eu-west-1.elb.amazonaws.com/graphql';
    const options = {
      method: 'POST',
      headers: {
        Authentication: ''
      },
      body: JSON.stringify({
        mutation: `{ signIn(email: ${this.state.email} password: ${this.state.password}) }`
      })
    };

    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          if (response.status === 404) {
            alert('Email not found, please retry');
          }
          if (response.status === 401) {
            alert('Email and password do not match, please retry');
          }
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          document.cookie = 'token=' + data.token;
          // navigate('/private-area')
        }
      });
  };

  handleUserData = token => {
    if (token) {
      localStorage.removeItem(AUTH.AUTH_TOKEN);
      // this.props.history.push(`/`);
    } else {
      localStorage.setItem(AUTH.AUTH_TOKEN, token);
    }
  };

  render() {
    const { email, password, errorMessage } = this.state;

    const LoginErrorMessage = errorMessage ? (
      <p className='errorMessage'>{errorMessage}</p>
    ) : (
      <p></p>
    );

    return (
      <div className='screen'>
        <div className='container'>
          <h2 className='appName'>SWAPP</h2>
          <div className='formContainer'>
            <form className='form' onSubmit={this.handleSubmit}>
              {LoginErrorMessage}
              <InputField
                type='text'
                placeholder='Email'
                name='email'
                value={email}
                onChange={this.handleInputChange}
              />
              <InputField
                type='password'
                placeholder='Password'
                name='password'
                value={password}
                onChange={this.handleInputChange}
              />
              <SolidButton onClick={() => {}} text='Login' />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
