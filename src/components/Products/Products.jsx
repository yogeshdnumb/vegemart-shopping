import { useState, useEffect } from "react";

import Product from "/src/components/Product/Product";

import styles from "./Products.module.css";
import { useContext } from "react";
import { dataContext } from "../../contextProviders";

export default function Products() {
  const data = useContext(dataContext);
  return (
    <div className={styles.Products}>
      {data.map((product) => {
        return (
          <Product
            key={product.id}
            data={{
              ...product,
              name:
                product.name.charAt(0).toUpperCase() + product.name.slice(1),
            }}
          ></Product>
        );
      })}
    </div>
  );
}
