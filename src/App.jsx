import { useState, useEffect } from "react";
import Router from "./routes/Router";
import { cartContext, setCartContext, dataContext } from "./contextProviders";
import styles from "./App.module.css";

function useData(url) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return [data, error, loading];
}

export default function App() {
  const [data, error, loading] = useData("/data.json");

  const [cart, setCart] = useState({ 3: 7 });

  if (loading) {
    return <div>LOADING</div>;
  } else if (error) {
    return <div>ERROR</div>;
  }
  return (
    <div className={styles.App}>
      <cartContext.Provider value={cart}>
        <setCartContext.Provider value={setCart}>
          <dataContext.Provider value={data}>
            <Router></Router>
          </dataContext.Provider>
        </setCartContext.Provider>
      </cartContext.Provider>
    </div>
  );
}
