import React, { useContext } from "react";
import MealsContext from "../../context/meals-context";
import styles from "./CartMeal.module.css";
const CartMeal = (props) => {
  const mealsContextValue = useContext(MealsContext);
  return (
    <React.Fragment>
      <div className={styles["main-div"]}>
        <div className={styles.col}>
          <h3>{props.name}</h3>
          <div className={styles["price-amount-row"]}>
            <p>{`$${props.price}`}</p>
            <p className={styles["quantity-p"]}>{`x${props.amount}`}</p>
          </div>
        </div>
        <div>
          <button
            className={`${styles.button} ${styles["minus-button"]}`}
            onClick={() => {
              mealsContextValue.addToCart({
                name: props.name,
                price: props.price,
                amount: -1,
              });
            }}
          >
            -
          </button>
          <button
            className={styles.button}
            onClick={() => {
              mealsContextValue.addToCart({
                name: props.name,
                price: props.price,
                amount: 1,
              });
            }}
          >
            +
          </button>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
};

export default CartMeal;
