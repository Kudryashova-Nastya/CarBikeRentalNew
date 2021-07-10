import React, { Component } from "react";
import "bulma/css/bulma.min.css";
import "./style.scss";
import {NavLink} from "react-router-dom";
import car from './car.svg';
import bike from './bicycle.svg';

const Home = () => (
  <div className="home__container">
    <h1 className="title">Я хочу арендовать</h1>
    <div className="columns">
      <div className=" column">
        <NavLink to="/cars" className="button is-link is-light link-block">
          <h3 className="title-3">Автомобиль</h3>
          <img src={car} width="300" alt="авто"/>
        </NavLink>
      </div>
      <div className="column">
        <NavLink to="/bikes" className="button is-link is-light link-block">
          <h3 className="title-3">Велосипед</h3>
          <img src={bike} width="300" alt="вело"/>
        </NavLink>
      </div>
    </div>
  </div>
);

export default Home;

