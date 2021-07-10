import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

import "bulma/css/bulma.min.css";
import "./style.scss";

function HistoryRentBike(props) {
  const user = props.user;

  const [rents, setRents] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://127.0.0.1:8000/userRentBike/?id=${user.id}`,
    }).then((response) => {
      setRents(response.data);
    });
  }, []);

  if (user.id === 0) {
    return <Redirect push to="/login" />;
  }
  return (
    <div>
      <h1 className="title">История аренды велосипедов</h1>
      <p>Всего: {rents.length}</p>
      <p>
        <ul className="statuses">
          Статусы:
          <li>на - На рассмотрении</li>
          <li>за - Заказ одобрен и оформлен</li>
          <li>оп - Оплачено</li>
          <li>ак - Активно</li>
          <li>вы - Выполнено</li>
          <li>от - Отменено</li>
        </ul>
      </p>

      <div className="table-container">
        <table className="table is-fullwidth is-striped">
          <thead>
            <tr>
              <th>id</th>
              <th>bike_id</th>
              <th>Статус</th>
              <th>Начало</th>
              <th>Конец</th>
              <th>Регион поездки</th>
              <th>Лимит</th>
              <th>Цена</th>
              <th>Комментарий</th>
            </tr>
          </thead>
          <tbody>
            {rents.map((p) => (
              <tr key={p.id}>
                <th>{p.id}</th>
                <td>
                  <Link
                    to={{
                      pathname: `/bikes/${p.bike_id_id}`,
                      fromDashboard: false,
                    }}
                    class="card-footer-item"
                  >
                    {p.bike_id_id}
                  </Link>
                </td>
                <td>{p.status}</td>
                <td>{p.start}</td>
                <td>{p.end}</td>
                <td>{p.region}</td>
                <td>{p.limit}</td>
                <td>{p.price}</td>
                <td>{p.comment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HistoryRentBike;
