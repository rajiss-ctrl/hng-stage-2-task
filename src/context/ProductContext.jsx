import React, { useReducer, createContext, useContext } from 'react';

const initialState = {
  cart: [],
  products: []
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const item = state.cart.find(i => i.id === action.product.id);
      if (item) {
        return {
          ...state,
          cart: state.cart.map(i =>
            i.id === action.product.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.product, quantity: 1 }],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(i => i.id !== action.productId),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(i =>
          i.id === action.productId ? { ...i, quantity: action.quantity } : i
        ),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.products,
      };
    default:
      return state;
  }
};

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
