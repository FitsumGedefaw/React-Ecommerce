import React, { useContext, useRef } from "react";
import styles from "./Meal.module.css";
import Button from "../UI/Button";
import MealsContext from "../context/meals-context";

const Meal = (props) => {
  const mealsContextValue = useContext(MealsContext);
  const amountRef = useRef();
  const addToCartHandler = () => {
    mealsContextValue.addToCart({
      name: props.name,
      price: props.price,
      amount: parseInt(amountRef.current.value),
    });
  };

  return (
    <React.Fragment>
      <div className={styles.meal}>
        <div className={styles.col}>
          <p className={styles['meal-name']}>{props.name}</p>
          <p>{props.description}</p>
          <p>{props.price}</p>
        </div>
        <div className={`${styles.col} ${styles["col-second"]}`}>
          <div>
            <label>Amount</label>
            <input type="number" max='5' ref={amountRef} defaultValue={1} />
          </div>
          <Button className={styles.button} onClick={addToCartHandler}>
            +Add
          </Button>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
};

export default Meal;
