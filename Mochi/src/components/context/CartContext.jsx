import React, { createContext, useContext, useReducer, useMemo } from "react";

const CartContext = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const idx = state.items.findIndex((i) => i.id === action.item.id);
      if (idx >= 0) {
        const items = state.items.slice();
        items[idx] = { ...items[idx], amount: items[idx].amount + 1 };
        return { ...state, items };
      }
      return {
        ...state,
        items: [...state.items, { ...action.item, amount: 1 }],
      };
    }
    case "REMOVE_ONE": {
      const items = state.items
        .map((i) => (i.id === action.id ? { ...i, amount: i.amount - 1 } : i))
        .filter((i) => i.amount > 0);
      return { ...state, items };
    }
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { items: [] });

  const value = useMemo(
    () => ({
      items: state.items,
      add: (item) => dispatch({ type: "ADD", item }),
      removeOne: (id) => dispatch({ type: "REMOVE_ONE", id }),
      clear: () => dispatch({ type: "CLEAR" }),
    }),
    [state.items]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
