import React, { Component } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import "bulma/css/bulma.min.css";
import "./style.scss";

class Deliveryman extends Component {
  deliveryman = this.props.deliveryman;

  logOut = (event) => {
    this.props.deliverymanLogin({ id: 0, name: "" });
    this.deliveryman = { id: 0, name: "" };
    console.log("Курьер деавторизован");
    return <Redirect push to="/login" />; //
  };

  render() {
    // смотрим авторизован ли пользователь и с какой ролью
    if (this.deliveryman.id === 0) {
      return <Redirect push to="/login" />;
    }

    return (
      <div>
        <h1 className="title">Личный кабинет курьера</h1>
        <div className="content dashboard">
          <img
            src={
              this.deliveryman.photo === ""
                ? "https://image.flaticon.com/icons/png/512/1177/1177568.png"
                : this.deliveryman.photo
            }
            alt="фото профиля"
            className="photo"
          />

          <p>Имя: {this.deliveryman.name}</p>
          <p>Профиль: авто и велосипеды</p>
          <p>Email: {this.deliveryman.email}</p>
          <p>Телефон: {this.deliveryman.phone}</p>
        </div>
        <div className="content">
          <Link to="/deliverymanEdit" className="button">
            Редактировать учётные данные
          </Link>
          <hr />

          <Link
            to="/historyDelivery"
            className="button is-medium is-fullwidth is-primary is-light"
          >
            История доставок
          </Link>
        </div>

        <button onClick={this.logOut} className="button is-danger">
          Выход из учётной записи
        </button>
      </div>
    );
  }
}

export default Deliveryman;
