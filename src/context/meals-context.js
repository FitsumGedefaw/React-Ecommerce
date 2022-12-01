import React, { useReducer, useState } from "react";
const MealsContext = React.createContext({
  cart: {},
  meals: [],
  totalInCart: 0,
  addToCart: (obj) => {},
  showCart: false,
  setShowCart: () => {},
});

const cartReducer = (state, newMeal) => {
  let mealIndex = -1;
  for (let i = 0; i < state.prevCart.length; i++) {
    if (state.prevCart[i].name === newMeal.name) {
      mealIndex = i;
      break;
    }
  }
  if (mealIndex === -1) {
    return {
      prevCart: [...state.prevCart, newMeal],
      totalInCart: (state.totalInCart += newMeal.amount),
    };
  } else {
    state.prevCart[mealIndex].amount += newMeal.amount;
    if (state.prevCart[mealIndex].amount === 0) {
      state.prevCart = state.prevCart.filter(
        (cartMeal) => cartMeal.name !== state.prevCart[mealIndex].name
      );
    }
    return {
      prevCart: state.prevCart,
      totalInCart: (state.totalInCart += newMeal.amount),
    };
  }
};

export const MealsContextProvider = (props) => {
  const meals = [
    {
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];
  const [cart, dispatchMeal] = useReducer(cartReducer, {
    prevCart: [],
    totalInCart: 0,
  });
  const [showCart, setShowCart] = useState(false);
  return (
    <MealsContext.Provider
      value={{
        cart: cart.prevCart,
        meals: meals,
        totalInCart: cart.totalInCart,
        addToCart: dispatchMeal,
        showCart: showCart,
        setShowCart: setShowCart,
      }}
    >
      {props.children}
    </MealsContext.Provider>
  );
};

export default MealsContext;
