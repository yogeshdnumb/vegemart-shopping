import React, { useContext } from "react";
import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import logo from "/src/assets/logo.png";

import { cartContext } from "../../contextProviders";

export default function Header() {
  const cart = useContext(cartContext);

  function getCartLength() {
    let sum = 0;

    for (const id in cart) {
      sum += +cart[id];
    }
    return sum;
  }

  return (
    <header className={styles.Header}>
      <div className={styles.logo__container}>
        <img className={styles.logo} src={logo} alt="vegmart logo" />
        <div className={styles.logo__text}>VEGEMART</div>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink
              className={({ isActive, isPending }) => {
                return isPending
                  ? styles.pending
                  : isActive
                  ? styles.active
                  : "";
              }}
              to="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="feather feather-home"
                viewBox="0 0 24 24"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
                <path d="M9 22L9 12 15 12 15 22"></path>
              </svg>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) => {
                return isPending
                  ? styles.pending
                  : isActive
                  ? styles.active
                  : "";
              }}
              to={"/products"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="feather feather-search"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="M21 21L16.65 16.65"></path>
              </svg>
              Browse
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive, isPending }) => {
                return isPending
                  ? styles.pending
                  : isActive
                  ? styles.active
                  : "";
              }}
              to="/cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="feather feather-shopping-cart"
                viewBox="0 0 24 24"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"></path>
              </svg>
              {"Cart:" + getCartLength()}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
