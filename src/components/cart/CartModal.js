import React, { useContext } from "react";
import styles from "./CartModal.module.css";
import Card from "../../UI/Card";
import MealsContext from "../../context/meals-context";
import CartMeal from "./CartMeal";
import Button from "../../UI/Button";
import ReactDOM from "react-dom";

const Modal = () => {
  const mealsContextValue = useContext(MealsContext);
  let totalPrice = 0;
  mealsContextValue.cart.forEach((meal) => {
    totalPrice += meal.price * meal.amount;
  });
  return (
    <Card className={styles["cart-modal"]}>
      {mealsContextValue.cart.map((meal) => (
        <CartMeal name={meal.name} price={meal.price} amount={meal.amount} />
      ))}
      <div className={styles["total-price-div"]}>
        <p>Total Amount</p> <p>{`$${totalPrice.toFixed(2)}`}</p>
      </div>
      <div className={styles["close-order-buttons-div"]}>
        <Button
          className={styles["close-button"]}
          onClick={() => {
            mealsContextValue.setShowCart(false);
          }}
        >
          Close
        </Button>
        <Button className={styles["order-button"]}>Order</Button>
      </div>
    </Card>
  );
};

const CartModal = () => {
  const mealsContextValue = useContext(MealsContext);
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div
          className={styles["back-drop"]}
          onClick={() => {
            mealsContextValue.setShowCart(false);
          }}
        ></div>,
        document.getElementById("cart-backdrop")
      )}
      {ReactDOM.createPortal(<Modal />, document.getElementById("cart-modal"))}
    </React.Fragment>
  );
};

export default CartModal;
