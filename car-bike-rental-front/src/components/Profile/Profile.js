import React, { Component} from 'react';
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import "bulma/css/bulma.min.css";
import "./style.scss";

class Profile extends Component {

  user = this.props.user;
  deliveryman = this.props.deliveryman;


  render() {
    // смотрим авторизован ли пользователь и с какой ролью
    if (this.user.id == 0) {
      if (this.deliveryman.id == 0) {
          return <Redirect push to="/login" />
        }
      } else {
        //компонент с дашбордом и разделами курьера
      }

    // определяем есть ли у пользователя фото
    if (this.user.photo == '') {
      var user_photo = 'https://image.flaticon.com/icons/png/512/1177/1177568.png'
    } else {
      var user_photo = this.user.photo;
    }

    return (
      <div>
        <h1 className="title">Личный кабинет пользователя</h1>
        <div className="content dashboard">
          <img src={this.user.photo} alt="фото профиля"/>
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
          <hr/>
        </div>
        <div className="content">
          <Link to="/userEdit" className="navbar-item">
            Редактировать учётные данные
          </Link>
        </div>

        <button onClick={this.loadBooks}>Выход из учётной записи</button>
      </div>
    );
  }
}

export default Profile;