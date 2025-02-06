import { Suspense, useState } from 'react'
import './App.css'
import { useSelector } from "react-redux";
import { RootState } from "./store";
import React from 'react';

const Foods = React.lazy(() => import('./components/Foods/Foods'));

function App()
{
  const [isChooseFoodPage, setIsChooseFoodPage] = useState(false);
  const menuItems = useSelector((state: RootState) => state.menu.items);

  return (
    <div className="App">
      <button className="toggleButton" onClick={() => setIsChooseFoodPage(!isChooseFoodPage)}>
        {isChooseFoodPage ? "Disponibilidad" : "Pedir Comida"}
      </button>

      <h1 className="title">Comida Rápida Online</h1>

      {!isChooseFoodPage && (
        <>
          <h4 className="subTitle">Menús</h4>
          <ul className="ulApp">
            {menuItems.map((item) => (
              <li key={item.id} className="liApp">
                <p>{item.name}</p>
                <p>Stock:{item.quantity}</p>
              </li>
            ))}
          </ul>
        </>
      )}

      {isChooseFoodPage &&
        <Suspense fallback={<div>Cargando productos...</div>}>
          <Foods />
        </Suspense>
      }

    </div>
  );
}

export default App
