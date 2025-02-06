import { useState } from 'react';
import { MenuItem } from '../../entities/entities';
import './Foods.css';
import FoodOrder from '../FoodOrder/FoodOrder';

interface FoodsProps
{
    foodItems: MenuItem[];
    onOrderSubmitted: (id: number, quantity: number) => void;
}

function Foods(props: FoodsProps)
{
    const [selectedFood, setSelectedFood] = useState<MenuItem | null>(null);

    const handleFoodClick = (food: MenuItem) =>
    {
        setSelectedFood(food);
    };

    return (
        <>
            {!selectedFood ? (
                <>
                    <h2>Carta</h2>
                    <h4 className="foodTitle">Pulsa sobre cada producto para añadirlo</h4>
                    <ul className="ulFoods">
                        {props.foodItems.map((item) => (
                            <li key={item.id}
                                className="liFoods"
                                onClick={() => handleFoodClick(item)}>
                                <img
                                    className="foodImg"
                                    src={`/images/${item.image}`}
                                    alt={item.name}
                                />
                                <div className="foodItem">
                                    <p className="foodDesc">{item.desc}</p>
                                    <p className="foodPrice">{item.price}$</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <FoodOrder food={selectedFood}
                    onQuantityUpdated={(id, quantity) =>
                    {
                        props.onOrderSubmitted(id, quantity);
                    }}
                    onReturnToMenu={() => setSelectedFood(null)}
                />
            )}
        </>
    );
}

export default Foods;