import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuItem } from "../entities/entities";

interface MenuState {
  items: MenuItem[];
}

const initialState: MenuState = {
  items: [
    {
      id: 1,
      name: "Hamburguesa de Pollo",
      quantity: 40,
      desc: "Hamburguesa de pollo frito... y mayonesa",
      price: 24,
      image: "hamburguesa.jpeg",
    },
    {
      id: 2,
      name: "Pizza Margarita",
      quantity: 30,
      desc: "Clásica pizza con tomate, mozzarella y albahaca",
      price: 35,
      image: "margarita.jpg",
    },
    {
      id: 3,
      name: "Tacos al Pastor",
      quantity: 50,
      desc: "Tacos con carne de cerdo adobada, piña y cilantro",
      price: 18,
      image: "tacos.jpg",
    },
    {
      id: 4,
      name: "Ensalada César",
      quantity: 25,
      desc: "Ensalada con lechuga romana, pollo, crutones y aderezo César",
      price: 22,
      image: "ensalada.jpg",
    },
  ],
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    orderItem: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - action.payload.quantity }
            : item
        ),
      };
    },
  },
});

export const { orderItem } = menuSlice.actions;
export default menuSlice.reducer;
