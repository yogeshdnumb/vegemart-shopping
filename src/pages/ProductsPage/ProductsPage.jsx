import { useState, useEffect } from "react";

import Products from "/src/components/Products/Products";
import Header from "../../components/Header/Header";

import styles from "./ProductsPage.module.css";

export default function ProductsPage() {
  return (
    <div className={styles.ProductPage}>
      <Header></Header>
      <Products></Products>
    </div>
  );
}
