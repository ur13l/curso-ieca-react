import { useLocation } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const ProductItem = ({product}) => {
    const {dispatch} = useCartContext();
    const { pathname } = useLocation();

    const addToCart = () => {
        dispatch({type: "ADD_TO_CART", payload: product})
        alert("Producto añadido al carrito")
    }

    const removeFromCart = () => {
        dispatch({type: "REMOVE_FROM_CART", payload: product.id})
        alert("Producto eliminado del carrito")
    }

    return (<li className="flex flex-col gap-2 p-4 items-center bg-white rounded-xl shadow">
        <img src={product.image} className="w-20" />
        <span className="text-center font-bold text-black">{product.title}</span>
        <span className="text-center font-bold text-sm text-black">${product.price}</span>
        { pathname !== "/cart" ?
       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={addToCart}>
            Añadir al carrito </button>
       : <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
       onClick={removeFromCart}>
           Eliminar del carrito </button> }
      </li>)
}

export default ProductItem;