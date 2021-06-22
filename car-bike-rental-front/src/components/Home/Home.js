import React, { Component } from "react";
import "bulma/css/bulma.min.css";
import "./style.scss";
import {NavLink} from "react-router-dom";

const Home = () => (
  <div>
    <h1 className="title">Я хочу арендовать</h1>
    <div className="columns">
      <div className=" column">
        <NavLink to="/car" className="link-block navbar-item">
          Автомобиль
        </NavLink>
      </div>
      <div className="column">
        <NavLink to="/bike" className="link-block navbar-item">
          Велосипед
        </NavLink>
      </div>
    </div>
  </div>
);

export default Home;

