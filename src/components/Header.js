import { useContext } from "react";
import styles from "./Header.module.css";
import MealsContext from "../context/meals-context";
import Button from "../UI/Button";

const Header = () => {
  const mealsContextValue = useContext(MealsContext);
  return (
    <header className={styles.header}>
      <h1>ReactMeals</h1>
      <Button
        className={styles.button}
        onClick={() => {
          mealsContextValue.setShowCart(true);
        }}
      >{`Your Cart ${mealsContextValue.totalInCart}`}</Button> 
    </header>
  );
};

export default Header;
