import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

import "bulma/css/bulma.min.css";
import "./style.scss";

function UserEdit(props) {
  const user = props.user;

  const [name, setName] = useState({
    name: user.name,
  });

  const onChangeName = (e) => {
    setName({
      name: e.target.value,
    });
  };

  const [gender, setGender] = useState({
    gender: user.gender,
  });

  const onChangeGender = (e) => {
    setGender({
      gender: e.target.value,
    });
  };

  const [date_birth, setDate_birth] = useState({
    date_birth: user.date_birth,
  });

  const onChangeDate_birth = (e) => {
    setDate_birth({
      date_birth: e.target.value,
    });
  };

  const [email, setEmail] = useState({
    email: user.email,
  });

  const onChangeEmail = (e) => {
    setEmail({
      email: e.target.value,
    });
  };

  const [phone, setPhone] = useState({
    phone: user.phone,
  });

  const onChangePhone = (e) => {
    setPhone({
      phone: e.target.value,
    });
  };

  const [photo, setPhoto] = useState({
    photo: user.photo,
  });

  const onChangePhoto = (e) => {
    setPhoto({
      photo: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const article = {
      id: user.id,
      name: name.name,
      date_birth: date_birth.date_birth,
      gender: gender.gender,
      phone: phone.phone,
      email: email.email,
      photo: photo.photo,
      password: user.password,
    };

    axios
      .put(
        `http://carbikerental.std-953.ist.mospolytech.ru/api/users/${user.id}/`,
        article
      )
      .then((res) => {
        alert("Данные успешно обновлены");
        console.log(res);
        props.userLogin(article);
      })
      .catch((error) => console.error(error));
  };

  if (user.id === 0) {
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
            <label className="label">Имя</label>
          </p>
          <p className="control field__input">
            <input
              className="input"
              type="text"
              value={name.name}
              onChange={onChangeName}
              required
              maxlength="100"
            />
          </p>
        </div>

        <div className="field has-addons">
          <p className="control">
            <label className="label">Пол</label>
          </p>
          <p className="control" style={{ marginLeft: 10 }}>
            <span className="select">
              <select
                className="selected"
                value={gender.gender}
                onChange={onChangeGender}
              >
                <option value="м">мужчина</option>
                <option value="ж">женщина</option>
              </select>
            </span>
          </p>
        </div>

        <div className="field has-addons">
          <label className="label">Дата рождения</label>
          <div className="control field__input">
            <input
              className="input"
              type="date"
              max={new Date().toISOString().slice(0, 10)}
              value={date_birth.date_birth}
              onChange={onChangeDate_birth}
              required
            />
          </div>
        </div>

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
            <label className="label">Ссылка на фото (необязательно)</label>
          </p>
          <p className="control field__input">
            <input
              className="input"
              type="text"
              value={photo.photo}
              onChange={onChangePhoto}
              maxlength="355"
            />
          </p>
        </div>

        <div className="control">
          <button className="button is-link" type="submit">
            Редактировать
          </button>
        </div>
      </form>
      ;
    </div>
  );
}
export default UserEdit;
