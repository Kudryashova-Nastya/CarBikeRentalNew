import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "bulma/css/bulma.min.css";
import "./style.scss";

function FullCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://carbikerental.std-953.ist.mospolytech.ru/api/cars/`,
    }).then((response) => {
      setCars(response.data);
    });
  }, []);

  return (
    <div>
      <h1 className="title">Аренда авто</h1>
      <div className="card-container">
        {cars.map((p) => (
          <div className="card" key={p.id}>
            <div className="card-image">
              <img src={p.photo} alt="car image" />
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">{p.brand}</p>
                  <p className="subtitle is-6">{p.price} руб/день</p>
                </div>
              </div>

              <div className="content">
                {p.year} года выпуска. <br />
                {p.mileage} км пробега. <br />
                <Link
                  to={{ pathname: `/cars/${p.id}`, fromDashboard: false }}
                  class="card-footer-item button is-primary is-light card_but"
                >
                  {" "}
                  Арендовать{" "}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FullCars;
