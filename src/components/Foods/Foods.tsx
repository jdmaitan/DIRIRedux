import { useState } from 'react';
import { MenuItem } from '../../entities/entities';
import './Foods.css';
import FoodOrder from '../FoodOrder/FoodOrder';
import { useSelector } from "react-redux";
import { RootState } from "../../store";



function Foods()
{
    const foodItems = useSelector((state: RootState) => state.menu.items);
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
                        {foodItems.map((item) => (
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
                    onReturnToMenu={() => setSelectedFood(null)}
                />
            )}
        </>
    );
}

export default Foods;