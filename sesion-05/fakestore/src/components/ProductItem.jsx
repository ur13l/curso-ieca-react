import { useCartContext } from "../context/CartContext";

const ProductItem = ({product}) => {
    const {dispatch} = useCartContext();

    return (<li className="flex flex-col gap-2 p-4 items-center bg-white rounded-xl shadow">
        <img src={product.image} className="w-20" />
        <span className="text-center font-bold text-black">{product.title}</span>
        <span className="text-center font-bold text-sm text-black">${product.price}</span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={()=> dispatch({type: "ADD_TO_CART", payload: product})}>
            Añadir al carrito </button>
      </li>)
}

export default ProductItem;