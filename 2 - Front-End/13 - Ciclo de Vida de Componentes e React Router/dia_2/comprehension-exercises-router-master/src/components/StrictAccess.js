import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class StrictAccess extends Component {
  constructor() {
    super();
    this.state = {
      user: { username: 'joao', password: '1234' },
      login: false
    }

    this.handleLogin = this.handleLogin.bind(this)

  }

  handleLogin() {
    const { user } = this.state
    if (user.username === 'joao' && user.password === '1234') {
      this.setState({ login: true })
    }
  }

  componentWillMount = () => {
    this.handleLogin()
  }

  render() {
    const { user, login } = this.state
    if (!login) {
      alert('Access denied')
      return <Redirect to="/" />
    }

    return (
      <div>
        <h2>Strict Access</h2>
        <p>{`Welcome ${user.username}!`}</p>
        <Link to='/app'>Voltar à página anterior</Link>
      </div>
    );
  }
}

export default StrictAccess;