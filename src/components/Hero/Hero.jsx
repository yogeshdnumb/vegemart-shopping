import React from "react";
import { Link } from "react-router-dom";

import styles from "./Hero.module.scss";

import basketImg from "/src/assets/basket.png";

export default function Hero() {
  return (
    <div className={styles.Hero}>
      <div className={styles.hero__text}>
        <p>Fresh</p>
        <p>Organic</p>
        <p>Healthy</p>
        <button>
          <Link to={"/products"}>Shop Now !</Link>
        </button>
      </div>
      <div className={styles.hero__img}>
        <img src={basketImg} alt="" />
      </div>
    </div>
  );
}
