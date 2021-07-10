import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

import "bulma/css/bulma.min.css";
import "./style.scss";

function UserEdit(props) {

    const user = props.user;


    if (user.id === 0) {
        return <Redirect push to="/login" />
    }
    return (
        <div>
        <Link className="back" to="/profile">
            Назад
        </Link>
            <h1 className="title">Редактирование профиля</h1>
        </div>
    );
}
export default UserEdit;