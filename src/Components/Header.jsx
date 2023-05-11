import React from "react";
import { NavLink } from "react-router-dom";
import style from "./header.module.css";

function Header() {
  return (
    <header className={style.header}>
      <nav>
        <NavLink className={style.button} to="/">Home</NavLink>
        <NavLink className={style.button} to="/form">Formulaire</NavLink>
      </nav>
    </header>
  );
}

export default Header;
