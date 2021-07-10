import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

import "bulma/css/bulma.min.css";
import "./style.scss";

function DeliverymanEdit(props) {
  const deliveryman = props.deliveryman;

  const [email, setEmail] = useState({
    email: deliveryman.email,
  });

  const onChangeEmail = (e) => {
    setEmail({
      email: e.target.value,
    });
  };

  const [phone, setPhone] = useState({
    phone: deliveryman.phone,
  });

  const onChangePhone = (e) => {
    setPhone({
      phone: e.target.value,
    });
  };

  const [photo, setPhoto] = useState({
    photo: deliveryman.photo,
  });

  const onChangePhoto = (e) => {
    setPhoto({
      photo: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const article = {
      id: deliveryman.id,
      name: deliveryman.name,
      phone: phone.phone,
      profile: deliveryman.profile,
      email: email.email,
      photo: photo.photo,
      password: deliveryman.password,
    };

    axios
      .put(
        `http://carbikerental.std-953.ist.mospolytech.ru/api/deliverymans/${deliveryman.id}/`,
        article
      )
      .then((res) => {
        alert("Данные успешно обновлены");
        console.log(res);
        props.deliverymanLogin(article);
      })
      .catch((error) => console.error(error));
  };

  if (deliveryman.id === 0) {
    return <Redirect push to="/login" />;
  }
  return (
    <div>
      <Link className="back" to="/profile">
        Назад
      </Link>
      <h1 className="title">Редактирование профиля</h1>
      <form onSubmit={handleSubmit}>
        <br />

        <div className="field has-addons">
          <p className="control">
            <label className="label">Телефон</label>
          </p>
          <p className="control field__input">
            <input
              className="input"
              type="text"
              value={phone.phone}
              onChange={onChangePhone}
              maxlength="20"
              required
            />
          </p>
        </div>

        <div className="field has-addons">
          <p className="control">
            <label className="label">Email</label>
          </p>
          <p className="control field__input">
            <input
              className="input"
              type="email"
              value={email.email}
              onChange={onChangeEmail}
              maxlength="100"
              required
            />
          </p>
        </div>

        <div className="field has-addons">
          <p className="control">
            <label className="label">Ссылка на фото</label>
          </p>
          <p className="control field__input">
            <input
              className="input"
              type="text"
              value={photo.photo}
              onChange={onChangePhoto}
              maxlength="355"
              required
            />
          </p>
        </div>

        <div className="control">
          <button className="button is-link" type="submit">
            Редактировать
          </button>
        </div>
      </form>
    </div>
  );
}
export default DeliverymanEdit;
