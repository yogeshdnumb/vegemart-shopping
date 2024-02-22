import { useContext } from "react";
import {
  cartContext,
  dataContext,
  setCartContext,
} from "../../contextProviders";
import Header from "../../components/Header/Header";
import styles from "./CartPage.module.scss";

export default function CartPage() {
  const cart = useContext(cartContext);
  const data = useContext(dataContext);
  return (
    <div>
      <Header></Header>
      {/* {console.log(cart)} */}

      <ul>
        {Object.keys(cart).map((id) => {
          return (
            <li className={styles.cartRow} key={id}>
              <img src={data[id].img} alt={data[id].name} />
              <div className={styles.count}>
                {cart[id] + "X" + data[id].price}
              </div>
              <div className={styles.total}>
                {cart[id] * data[id].price}
                {"\u20B9"}
              </div>
              <button>Checkout</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
