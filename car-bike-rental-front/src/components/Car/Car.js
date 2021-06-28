import React, { useEffect, useState, Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "bulma/css/bulma.min.css";
import "./style.scss";

// class Car extends Component
function Car({ match }) {
  const [car, setCar] = useState({});
  const id = match.params.id;

  // useEffect(() => {
  //   axios({
  //     method: "GET",
  //     url: `http://127.0.0.1:8000/api/cars/${id}/`,
  //   }).then((response) => {
  //     setCar(response.data);
  //   });
  // }, [id]);

  const [model, setModel] = useState({});
  const [error, setError] = useState({});

  // GET-запрос на вывод информации о самом авто и его модели

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/cars/${id}/`)
      .then((response) => {
        setCar(response.data);
        return axios.get(
          `http://127.0.0.1:8000/api/car_models/${response.data.car_model_id}/`
        );
      })
      .then((response) => {
        setModel(response.data);
      });
  }, [id]);

  // POST-запрос на аренду

  const [state, setState] = useState({
    start: "",
  });

  const [state2, setState2] = useState({
    startTime: "9:00",
  });

  const [state3, setState3] = useState({
    end: "",
  });

  const [state4, setState4] = useState({
    endTime: "9:00",
  });

  const [state5, setState5] = useState({
    region: "",
  });

  const [state6, setState6] = useState({
    location: "",
  });

  const [state7, setState7] = useState({
    comment: "",
  });

  const onChangeStart = (e) => {
    setState({
      start: e.target.value,
    });
  };

  const onChangeEnd = (e) => {
    setState3({
      end: e.target.value,
    });
  };

  const onChangeStartTime = (e) => {
    setState2({
      startTime: e.target.value,
    });
  };

  const onChangeEndTime = (e) => {
    setState4({
      endTime: e.target.value,
    });
  };

  const onChangeRegion = (e) => {
    setState5({
      region: e.target.value,
    });
  };

  const onChangeLocation = (e) => {
    setState6({
      location: e.target.value,
    });
  };

  const onChangeComment = (e) => {
    setState7({
      comment: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = {
    //   user_id: 1,  // временно
    //   car_id: id,
    //   status: 'за',
    //   start: this.state.start,
    //   end: this.state.end,
    //   region: this.state.region,
    //   delivery_to_id:
    //   delivery_from_id:
    //   limit: car.max_limit,
    //   price: 1000
    //   comment: this.state.comment,
    // };

    axios
      .post("http://127.0.0.1:8000/api/deliverys/", {
        type_delivery: "ат",
        user_id: 1,
        deliveryman_id: 1,
        location_id: car.location_id,
        delivery_location: state6.location,
        time: state.start + " " + state2.startTime,
      })
      .then((res) => {
        console.log(res);
        alert("Заявка на аренду успешно подана. Ожидайте изменения статуса в личном кабинете. Вам придёт оповещение");
      })
      .catch((error) => {
        setError();
        console.log(error);
        if (error.response) {
          console.log("--------------------------------------------------");
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log("*************************");
          console.log(error.request);
        } else {
          console.log("++++++++++++++++++++++++");
          console.log("Error", error.message);
        }
        console.log(error.config);

        alert("Ошибка " + error.response.status);
      });
  };

  return (
    <div>
      <Link className="back" to="/cars">
        Назад
      </Link>
      <h1 className="title">{model.name}</h1>

      <div className="card-image">
        <img src={car.photo} alt="car image" />
      </div>

      <div className="params">
        <div className="name">Год выпуска</div>
        <div className="filler"></div>
        <div className="val">{car.year}</div>
      </div>
      <div className="params">
        <div className="name">Цвет</div>
        <div className="filler"></div>
        <div className="val">{car.color}</div>
      </div>
      <div className="params">
        <div className="name">Пробег</div>
        <div className="filler"></div>
        <div className="val">{car.mileage} км</div>
      </div>
      <div className="params">
        <div className="name">Включённый пробег</div>
        <div className="filler"></div>
        <div className="val">{car.max_limit} км</div>
      </div>

      <h1 className="title-3">Период аренды</h1>
      <form onSubmit={handleSubmit}>
        <div className="field has-addons">
          <h1>
            значения дата время начало {state.start + " " + state2.startTime}
          </h1>
          <br />
          <h1>значения дата время конец {state3.end + " " + state4.endTime}</h1>
          <br />
          <h1>регион {state5.region}</h1>
          <br />
          <h1>локация {state6.location}</h1>
          <br />
          <h1>коммент {state7.comment}</h1>
          <br />

          <p className="control">
            <span className="select">
              <select
                className="selected"
                value={state2.startTime}
                onChange={onChangeStartTime}
              >
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>
                <option value="23:00">23:00</option>
              </select>
            </span>
          </p>
          <p className="control">
            <input
              className="input"
              type="date"
              min={new Date().toISOString().slice(0, 10)}
              value={state.start}
              onChange={onChangeStart}
              required
            />
          </p>
        </div>

        <div className="field has-addons">
          <p className="control">
            <span className="select">
              <select
                className="selected"
                value={state4.endTime}
                onChange={onChangeEndTime}
              >
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>
                <option value="23:00">23:00</option>
              </select>
            </span>
          </p>
          <p className="control">
            <input
              className="input"
              type="date"
              min={new Date().toISOString().slice(0, 10)}
              value={state3.end}
              onChange={onChangeEnd}
              required
            />
          </p>
        </div>

        <div className="field">
          <label className="label">Регион поездки</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Место, куда вы планируете поехать"
              maxlength="40"
              value={state5.region}
              onChange={onChangeRegion}
              required
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Адрес выдачи и возврата машины</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Место, где вы заберёте и куда вернёте автомобиль"
              maxlength="100"
              value={state6.location}
              onChange={onChangeLocation}
              required
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Комментарий (по желанию)</label>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="Ваш комментарий"
              maxlength="200"
              value={state7.comment}
              onChange={onChangeComment}
            ></textarea>
          </div>
        </div>

        <div className="control">
          <button className="button is-link" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Car;
