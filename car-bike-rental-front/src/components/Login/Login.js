import React, { Component} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import "bulma/css/bulma.min.css";
import "./style.scss";

class Login extends Component {

  state = {
    credentials: {email: '', password: ''}
  }

  handleSubmit = (e) => {
    e.preventDefault();
    }

  login = event => {
    fetch('http://127.0.0.1:8000/auth/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
    })
    .then( data => data.json())
    .then(
      data => {
        this.props.userLogin(data);
        console.log(data)
      }
    )
    .catch( error => console.error(error))
  }

  inputChanged = event => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({credentials: cred});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1 className="title">Авторизация</h1>
        

        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input is-successr" type="email" placeholder="Ваш адрес электронной почты" name="email" value={this.state.credentials.email}
            onChange={this.inputChanged}/>
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">Пароль</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input is-dange" type="password" name="password" placeholder="Ваш пароль" value={this.state.credentials.password}
            onChange={this.inputChanged}/>
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" onClick={this.login}>Войти как пользователь</button>
          </div>
          <div className="control">
            <button className="button is-link is-light">Войти как курьер</button>
          </div>
        </div>

        <div className="field">
          <Link to="/admin/">
            Вход для администратора
          </Link>
        </div>
      </form>
    );
  }
}

export default Login;