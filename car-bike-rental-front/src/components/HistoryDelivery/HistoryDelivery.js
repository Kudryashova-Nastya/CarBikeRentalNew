import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

import "bulma/css/bulma.min.css";
import "./style.scss";

function HistoryDelivery(props) {
  const deliveryman = props.deliveryman;

  const [delivery, setDeliverys] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://127.0.0.1:8000/api/deliverys/`,
    }).then((response) => {
      setDeliverys(response.data);
    });
  }, []);

  if (deliveryman.id === 0) {
    return <Redirect push to="/login" />;
  }
  return (
    <div>
      <h1 className="title">История доставки автомобилей и велосипедов</h1>
      <p>Всего: {delivery.length}</p>
      <p>
        <ul className="statuses">
          Статусы:
          <li>ат - Авто туда</li>
          <li>ао - Авто обратно</li>
          <li>вт - Вело туда</li>
          <li>во - Вело обратно'</li>
        </ul>
      </p>

      <div class="table-container">
        <table class="table is-fullwidth is-striped">
          <thead>
            <tr>
              <th>id</th>
              <th>Тип</th>
              <th>Место доставки</th>
              <th>Время</th>
            </tr>
          </thead>
          <tbody>
            {delivery.map((p) => (
              <tr key={p.id}>
                <th>{p.id}</th>
                <td>{p.type_delivery}</td>
                <td>{p.delivery_location}</td>
                <td>{p.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HistoryDelivery;
