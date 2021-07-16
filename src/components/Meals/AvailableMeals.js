import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Chicken',
    description: 'Finest chicken and veggies',
    price: 180.99,
  },
  {
    id: 'm2',
    name: 'Fish Cury',
    description: 'Finest fish and and spices item!',
    price: 120.5,
  },
  {
    id: 'm3',
    name: 'chicken Burger',
    description: 'With chicken and butter',
    price: 99.99,
  },
  {
    id: 'm4',
    name: 'Egg Role',
    description: 'Finest Egg role',
    price: 25.99,
  },
  {
    id: 'm5',
    name: 'Mutton cury',
    description: 'the famouse mutton form champarn',
    price: 250.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
