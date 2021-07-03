import React, { useState } from "react";
import logo from "./logo.svg";
import "bulma/css/bulma.min.css";
import "./App.css";
import { Route, NavLink, Switch } from "react-router-dom";
import Home from "./components/Home/Home.js";
import FullCars from "./components/FullCars/FullCars.js";
import Car from "./components/Car/Car.js";
import About from "./components/About/About.js";
import Login from "./components/Login/Login.js";
import Profile from "./components/Profile/Profile.js";

function App() {
  const [token, setToken] = useState({ id: 0, name: "" });

  const userLogin = (tok) => {
    setToken(tok);
  };

  return (
    <div className="App">
      <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <NavLink to="/" className="navbar-item">
              <img src={logo} alt="logo" />
            </NavLink>

            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"> </span>
              <span aria-hidden="true"> </span>
              <span aria-hidden="true"> </span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <NavLink to="/about" className="navbar-item">
                О нас{" "}
              </NavLink>

              <div className="navbar-item has-dropdown is-hoverable">
                <NavLink
                  to="/"
                  className="navbar-link"
                  activeClassName="navbar-link-active"
                >
                  Арендовать{" "}
                </NavLink>

                <div className="navbar-dropdown">
                  <NavLink to="/cars" className="navbar-item">
                    Автомобиль{" "}
                  </NavLink>
                  <hr className="navbar-divider" />
                  <NavLink to="/bikes" className="navbar-item">
                    Велосипед{" "}
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">{token.name}</div>
              <div className="navbar-item">
                <div className="buttons">
                  <NavLink to="/profile" className="button is-primary">
                    <strong> Личный кабинет </strong>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/cars" component={FullCars} />
        <Route path="/cars/:id" render={({match}) => <Car user={token} match={match}/>} />
        <Route exact path="/profile" render={() => <Profile user={token} />}/>
        <Route exact path="/login" render={() => <Login userLogin={userLogin} />}/>
        {/* <Route exact path="/bikes" component={FullBikes} />
        <Route path="/bikes/:id" component={Bike} /> */}
      </Switch>
    </div>
  );
}

export default App;
