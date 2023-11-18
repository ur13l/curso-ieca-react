import { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import { useSelector } from "react-redux";

const Cart = () => {
    const cart = useSelector(state => state.cart) 
    const [total, setTotal] = useState(0);
    

    useEffect(()=>{
        setTotal(
            cart.reduce((acc, product) => acc + product.price, 0).toFixed(2)
        )
    }, [cart])

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Carrito</h1>
            <ul className="flex flex-col gap-2">
                {cart.map((product) => (
                    <ProductItem product={product} key={product.id}/>
                )) }
            </ul>
            <span className="text-black"> Total de la compra: ${total}</span>
        </div>
    )
}

export default Cart