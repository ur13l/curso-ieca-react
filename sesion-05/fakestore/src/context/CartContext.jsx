import {createContext, useContext, useReducer} from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const cartReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_CART":
            return {...state, cart: [...state.cart, action.payload]};
        default:
            return state;
    }
}

const initialValue= {
    cart: []
}


export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialValue)

    return (
        <CartContext.Provider value={{state, dispatch}}>
        {children}
        </CartContext.Provider>
    )
}
