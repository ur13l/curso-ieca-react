import ProductItem from "../components/ProductItem";
import { useCartContext } from "../context/CartContext"

const Cart = () => {
    const { state: {cart}} = useCartContext();


    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Carrito</h1>
            <ul className="flex flex-col gap-2">
                {cart.map((product) => (
                    <ProductItem product={product} key={product.id}/>
                )) }
            </ul>
        </div>
    )
}

export default Cart