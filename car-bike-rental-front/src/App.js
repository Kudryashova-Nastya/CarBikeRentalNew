import logo from "./logo.svg";
import "bulma/css/bulma.min.css";
import "./App.css";
import {Route, NavLink, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <NavLink to="/"  className="navbar-item">
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
              <NavLink to="/about" className="navbar-item">О нас </NavLink>

              <div className="navbar-item has-dropdown is-hoverable">
                <NavLink to="/" className="navbar-link" activeClassName="navbar-link-active">Арендовать </NavLink>

                <div className="navbar-dropdown">
                  <NavLink to="/car" className="navbar-item">Автомобиль </NavLink>
                  <hr className="navbar-divider" />
                  <NavLink to="/bike" className="navbar-item">Велосипед </NavLink>
                </div>
              </div>
            </div>

            <div className="navbar-end">
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
        <Route exact path="/car" component={FullCars} />
        <Route path="/car/:id" component={Car} />
        <Route exact path="/bike" component={FullBikes} />
        <Route path="/bike/:id" component={Bike} />
        <Route exact path="/profile" component={Login} />
        <Route path="/profile/:id" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
