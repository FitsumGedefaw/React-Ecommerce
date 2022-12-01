import { useContext } from 'react';
import MealsContext from '../context/meals-context';
import styles from './MealsList.module.css';
import Meal from './Meal';
import Card from '../UI/Card';

const MealsList = () => {
    const mealsContextValue = useContext(MealsContext);
    return(
        <Card className={styles['meals-list-card']}>
            {mealsContextValue.meals.map((meal) => <Meal name={meal.name} description={meal.description} price={meal.price} />)}
        </Card>
    )
};

export default MealsList;   