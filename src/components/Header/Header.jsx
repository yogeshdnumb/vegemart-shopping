import React, { useContext, useState } from "react";
import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import logo from "/src/assets/logo.png";
import OpenIcon from "../OpenIcon";
import CloseIcon from "../CloseIcon";
import CartIcon from "../CartIcon";
import SearchIcon from "../SearchIcon";
import HomeIcon from "../HomeIcon";

import { cartContext } from "../../contextProviders";

export default function Header() {
  const cart = useContext(cartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function getCartLength() {
    let sum = 0;

    for (const id in cart) {
      sum += +cart[id];
    }
    return sum;
  }

  return (
    <header className={styles.Header}>
      <Link to={"/"}>
        <div className={styles.logo__container}>
          <img className={styles.logo} src={logo} alt="vegmart logo" />
          <div className={styles.logo__text}>VEGEMART</div>
        </div>
      </Link>
      <nav className={styles.nav}>
        {isMenuOpen && (
          <div className={styles.menu__open} onClick={toggleMenu}>
            <OpenIcon></OpenIcon>
          </div>
        )}
        {isMenuOpen || (
          <div className={styles.menu__close} onClick={toggleMenu}>
            <CloseIcon></CloseIcon>
          </div>
        )}
        <ul className={isMenuOpen ? styles.menu__opened : styles.menu__closed}>
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
              <HomeIcon></HomeIcon>
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
              <SearchIcon></SearchIcon>
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
              <CartIcon></CartIcon>
              {"Cart " + getCartLength()}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
