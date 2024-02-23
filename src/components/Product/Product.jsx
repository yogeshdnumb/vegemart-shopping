import { useContext } from "react";
import styles from "./Product.module.scss";
import { Link } from "react-router-dom";
import { cartContext, setCartContext } from "../../contextProviders";
import CartIcon from "../CartIcon";

export default function Product({ data }) {
  const cart = useContext(cartContext);
  const setCart = useContext(setCartContext);
  return (
    <div className={styles.Product}>
      <Link to={`/products/${data.id}`} state={data} className={styles.Link}>
        <div className={styles["img-container"]}>
          <img src={data.img} alt={data.name} />
        </div>
      </Link>
      <div className={styles.footer}>
        <div className={styles.product__name}>{data.name}</div>
        <div className={styles.product__price}>
          {"\u20B9"}
          {data.price} per kg
        </div>
        <button
          onClick={() => {
            // setCart([...cart, data.id]);
            if (Object.keys(cart).includes(data.id.toString())) {
              setCart({ ...cart, [data.id]: cart[data.id] + 1 });
            } else {
              setCart({ ...cart, [data.id]: 1 });
            }
          }}
        >
          <CartIcon></CartIcon>
        </button>
      </div>
    </div>
  );
}
