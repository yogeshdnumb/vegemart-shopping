import { useContext } from "react";
import styles from "./Product.module.scss";
import { Link } from "react-router-dom";
import { cartContext, setCartContext } from "../../contextProviders";

export default function Product({ data }) {
  const cart = useContext(cartContext);
  const setCart = useContext(setCartContext);
  return (
    <Link to={`/products/${data.id}`} state={data} className={styles.Link}>
      <div className={styles.Product}>
        <div className={styles["img-container"]}>
          <img src={data.img} alt={data.name} />
        </div>
        <div className={styles.footer}>
          <div className={styles.product__name}>{data.name}</div>
          <div className={styles.product__price}>
            {"\u20B9"}
            {data.price} per kg
          </div>
        </div>
      </div>
    </Link>
  );
}
