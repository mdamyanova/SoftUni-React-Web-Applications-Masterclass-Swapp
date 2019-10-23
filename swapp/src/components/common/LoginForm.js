import React, { Component } from 'react';
import Button from './Button';
import Input from './Input';
import './styles/LoginForm.style.css';

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
    // TODO
  };

  handleUserData = token => {
    // TODO
  };

  render() {
    const { email, password, errorMessage } = this.state;

    const LoginErrorMessage = errorMessage ? (
      <p className='error_message'>{errorMessage}</p>
    ) : (
      <p></p>
    );

    return (
      <form className='form' onSubmit={this.handleSubmit}>
        {LoginErrorMessage}
        <Input
          type='text'
          placeholder='Email'
          name='email'
          value={email}
          onChange={this.handleInputChange}
        />
        <Input
          type='password'
          placeholder='Password'
          name='password'
          value={password}
          onChange={this.handleInputChange}
        />
        <Button type='submit'>
          Login
        </Button>
      </form>
    );
  }
}

export default LoginForm;
