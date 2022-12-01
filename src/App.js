import React, { useContext } from 'react';
import './App.css';
import CartModal from './components/cart/CartModal';
import Header from './components/Header';
import HomePageText from './components/HomePageText';
import MealsList from './components/MealsList';
import MealsContext from './context/meals-context';

function App() {
  const mealsContextValue = useContext(MealsContext);
  return (
   <React.Fragment>
    <Header />
    {mealsContextValue.showCart && <CartModal />}
    <HomePageText />
    <MealsList />
   </React.Fragment>
  );
}

export default App;
