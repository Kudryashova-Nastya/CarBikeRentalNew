import React, { Component} from 'react';
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import "bulma/css/bulma.min.css";
import "./style.scss";

class Profile extends Component {

  user = this.props.user;

  deliveryman = this.props.deliveryman;

  logOut = (event) => {
    this.props.userLogin({ id: 0, name: "" });
    this.user = { id: 0, name: "" };
    console.log("пользователь деавторизован");
    return <Redirect push to="/login" /> //
  };

  render() {
    // смотрим авторизован ли пользователь и с какой ролью
    if (this.user.id === 0) {
      if (this.deliveryman.id === 0) {
          return <Redirect push to="/login" />
        }
      } else {
        //компонент с дашбордом и разделами курьера
      }


    return (
      <div>
        <h1 className="title">Личный кабинет пользователя</h1>
        <div className="content dashboard">
          <img src={(this.user.photo === '') ? "https://image.flaticon.com/icons/png/512/1177/1177568.png" : this.user.photo} alt="фото профиля" className="photo"/>
          
          <p>
          Имя: {this.user.name}
          </p>
          <p>
          Дата рождения: {this.user.date_birth}
          </p>
          <p>
          Пол: {this.user.gender}
          </p>
          <p>
          Email: {this.user.email}
          </p>
          <p>
          Телефон: {this.user.phone}
          </p>
          
        </div>
        <div className="content">
          <Link to="/userEdit" className="button">
            Редактировать учётные данные
          </Link>
          <hr/>
          
          <Link to="/historyRentCar" className="button is-medium is-fullwidth is-primary is-light">
            История аренды авто
          </Link>
        </div>

        <button onClick={this.logOut} className="button is-danger">Выход из учётной записи</button>
      </div>
    );
  }
}

export default Profile;