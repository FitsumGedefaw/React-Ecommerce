import Card from '../UI/Card';
import styles from './HomePageText.module.css';
const HomePageText = () => {
    return(
        <Card className={styles['home-page-text-card']}>
            <h1>Delicious Food, Delivered To You</h1>
            <p>Choose your favourite meal from our broad selection of available meals and enjoy a Delicious
                lunch or dinner at home.</p>
            <p>All our meals are cooked with high-quality ingredients, just-in-time and ofcourse by experienced chefs!</p>
        </Card>
    );
};

export default HomePageText;