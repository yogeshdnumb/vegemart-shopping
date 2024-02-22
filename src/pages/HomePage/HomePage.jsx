import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";

import styles from "./HomePage.module.css";
export default function Home() {
  return (
    <div className={styles.HomePage}>
      <Header></Header>
      <Hero></Hero>
      <Products></Products>
    </div>
  );
}
