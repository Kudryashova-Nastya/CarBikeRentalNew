import React, { useState } from "react";
import logo from "./logo.svg";
import "bulma/css/bulma.min.css";
import "./App.css";
import { Route, NavLink, Switch, BrowserRouter as Router} from "react-router-dom";
import Home from "./components/Home/Home.js";
import FullCars from "./components/FullCars/FullCars.js";
import Car from "./components/Car/Car.js";
import FullBikes from "./components/FullBikes/FullBikes.js";
import Bike from "./components/Bike/Bike.js";
import About from "./components/About/About.js";
import Login from "./components/Login/Login.js";
import Profile from "./components/Profile/Profile.js";
import UserEdit from "./components/UserEdit/UserEdit.js";
import HistoryRentCar from "./components/HistoryRentCar/HistoryRentCar.js";
import HistoryRentBike from "./components/HistoryRentBike/HistoryRentBike.js";

function App() {
  // арендатор
  const [user, setUser] = useState({ id: 0, name: "" });

  const userLogin = (tok) => {
    setUser(tok);
  };

  // курьер
  const [deliveryman, setDeliveryman] = useState({ id: 0, name: "" });

  const deliverymanLogin = (tok) => {
    setDeliveryman(tok);
  };


  return (
    <div className="App">
    {/* <Router> */}
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
              <div className="navbar-item">{user.name}</div>
              <div className="navbar-item">{deliveryman.name}</div>
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
        <Route path="/cars/:id" render={({match}) => <Car user={user} match={match}/>} />
        <Route exact path="/bikes" component={FullBikes} />
        <Route path="/bikes/:id" render={({match}) => <Bike user={user} match={match}/>} />
        <Route exact path="/profile" render={() => <Profile user={user} userLogin={userLogin} deliveryman={deliveryman} deliverymanLogin={deliverymanLogin}/>}/>
        <Route exact path="/login" render={() => <Login userLogin={userLogin} user={user} deliverymanLogin={deliverymanLogin} deliveryman={deliveryman}/>}/>
        <Route exact path="/userEdit" render={() => <UserEdit userLogin={userLogin} user={user}/>}/>
        <Route exact path="/historyRentCar" render={() => <HistoryRentCar userLogin={userLogin} user={user}/>}/>
        <Route exact path="/historyRentBike" render={() => <HistoryRentBike userLogin={userLogin} user={user}/>}/>
     
      </Switch>
      {/* </Router> */}
    </div>
  );
}

export default App;
