import { useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { cartContext, setCartContext } from "../../contextProviders";

import Header from "../../components/Header/Header";
import styles from "./Details.module.scss";

export default function Details() {
  const cart = useContext(cartContext);
  const setCart = useContext(setCartContext);
  const location = useLocation();
  const data = location.state;

  return (
    <div className={styles.Details}>
      <Header></Header>
      <div className={styles.main}>
        <div className={styles.img__container}>
          <img src={data.img} alt={data.name} />
        </div>

        <div className={styles.content}>
          <div className={styles.desc}>{data.description}</div>
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
            Add to Cart
          </button>
          <button>Buy</button>
        </div>
      </div>
    </div>
  );
}
