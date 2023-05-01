import { createSlice } from '@reduxjs/toolkit';
import { pizzas } from '../products/pizzas';
const pizzaSlice = createSlice({
  name: 'pizzas',
  initialState: {
    pizzas,
    cart: [],
  },
  reducers: {
    addToCart(state, { payload }) {
      const pizza = state.pizzas.find((pizza) => pizza.id === payload);
      const existingCartItem = state.cart.find((item) => item.id === pizza.id);
      if (existingCartItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === existingCartItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return { ...state, cart: [...state.cart, { quantity: 1, ...pizza }] };
      }
    },

    remove(state, { payload }) {
      const pizza = state.cart.find((pizza) => pizza.id === payload);
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === pizza.id ? { ...item, quantity: item.quantity - 1 } : item
        ),
      };
    },
    removeFromCart(state, { payload }) {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload),
      };
    },
    makeAnOrder(state, _) {
      return { ...state, cart: [] };
    },
  },
});
export const { addToCart, remove, removeFromCart, makeAnOrder } =
  pizzaSlice.actions;
export default pizzaSlice.reducer;
