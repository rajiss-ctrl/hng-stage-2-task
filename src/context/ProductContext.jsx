import React, { useReducer, createContext, useContext, useEffect } from 'react';

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  products: JSON.parse(localStorage.getItem('products')) || [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const item = state.cart.find(i => i.id === action.product.id);
      if (item) {
        const updatedCart = state.cart.map(i =>
          i.id === action.product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return {
          ...state,
          cart: updatedCart,
        };
      }
      const newCart = [...state.cart, { ...action.product, quantity: 1 }];
      localStorage.setItem('cart', JSON.stringify(newCart));
      return {
        ...state,
        cart: newCart,
      };
    case 'REMOVE_FROM_CART':
      const filteredCart = state.cart.filter(i => i.id !== action.productId);
      localStorage.setItem('cart', JSON.stringify(filteredCart));
      return {
        ...state,
        cart: filteredCart,
      };
    case 'UPDATE_QUANTITY':
      const updatedQuantityCart = state.cart.map(i =>
        i.id === action.productId ? { ...i, quantity: action.quantity } : i
      );
      localStorage.setItem('cart', JSON.stringify(updatedQuantityCart));
      return {
        ...state,
        cart: updatedQuantityCart,
      };
    case 'CLEAR_CART':
      localStorage.removeItem('cart');
      return {
        ...state,
        cart: [],
      };
    case 'SET_PRODUCTS':
      localStorage.setItem('products', JSON.stringify(action.products));
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
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const products = JSON.parse(localStorage.getItem('products'));
    if (cart) {
      dispatch({ type: 'SET_CART', cart });
    }
    if (products) {
      dispatch({ type: 'SET_PRODUCTS', products });
    }
  }, []);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
