import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "bulma/css/bulma.min.css";
import "./style.scss";

function FullBikes() {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://127.0.0.1:8000/api/bikes/`,
    }).then((response) => {
      setBikes(response.data);
    });
  }, []);

  return (
    <div>
      <h1 className="title">Аренда велосипедов</h1>
      <div className="card-container">
        {bikes.map((p) => (
          <div className="card" key={p.id}>
            <div className="card-image">
              <img src={p.photo} alt="car image" />
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">{p.brand}</p>
                  <p className="subtitle is-6">{p.price} руб/час</p>
                </div>
              </div>

              <div className="content">
                {p.year} года выпуска. <br />
                {p.color} цвет <br />
                <Link
                  to={{ pathname: `/bikes/${p.id}`, fromDashboard: false }}
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

export default FullBikes;
