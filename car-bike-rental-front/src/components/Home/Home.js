import React, { Component } from "react";
import "bulma/css/bulma.min.css";
import "./style.scss";
import {NavLink} from "react-router-dom";

const Home = () => (
  <div>
    <h1 className="title">Я хочу арендовать</h1>
    <div className="columns">
      <div className=" column">
        <NavLink to="/cars" className="button is-link is-light link-block">
          Автомобиль
        </NavLink>
      </div>
      <div className="column">
        <NavLink to="/bikes" className="button is-link is-light link-block">
          Велосипед
        </NavLink>
      </div>
    </div>
  </div>
);

export default Home;

