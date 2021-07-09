import React, { Component } from "react";
import axios from "axios";
import { Link, withRouter, useHistory} from "react-router-dom";
// import { Link, useHistory, browserHistory} from "react-router-dom";
// import { browserHistory } from 'react-router';
// import { Router as browserHistory } from 'react-router';
// import { Route, Switch, browserHistory } from "react-router-dom";
// import { browserHistory } from 'react-router'

import "bulma/css/bulma.min.css";
import "./style.scss";

class Login extends Component {
  state = {
    credentials: { email: "", password: "" },
  };

  login = event => { axios
    .get(`http://127.0.0.1:8000/auth/?email=${this.state.credentials.email}`)
    .then((response) => {
      if (response.data === "пользователя с такой почтой не существует") {
        console.log(response.data);
        alert("Пользователя с указанной электронной почтой не существует");
      } else {
        if (response.data[0].password === this.state.credentials.password) {
          this.props.userLogin(response.data[0]);
          console.log("пользователь авторизован");
          // const history = useHistory();
          this.props.history.goBack();
          // browserHistory.goBack()
        } else {
          alert("Пароль неверен")
        }
      }}).catch( error => console.error(error))
  }

  inputChanged = (event) => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({ credentials: cred });
  };


  render() {
    return (
      <div>
        <h1 className="title">Авторизация</h1>
        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left">
            <input
              className="input is-successr"
              type="email"
              placeholder="Ваш адрес электронной почты"
              name="email"
              value={this.state.credentials.email}
              onChange={this.inputChanged}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">Пароль</label>
          <div className="control has-icons-left">
            <input
              className="input is-dange"
              type="password"
              name="password"
              placeholder="Ваш пароль"
              value={this.state.credentials.password}
              onChange={this.inputChanged}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" onClick={this.login}>
              Войти как пользователь
            </button>
          </div>
          <div className="control">
            <button className="button is-link is-light">
              Войти как курьер
            </button>
          </div>
        </div>

        <div className="field">
          <Link to="/admin/">Вход для администратора</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
