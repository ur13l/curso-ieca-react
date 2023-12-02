import { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import { useCartContext } from "../context/CartContext"

const Cart = () => {
    const [total, setTotal] = useState(0);
    const {
      state: { cart },
    } = useCartContext();
    p;

    useEffect(() => {
      const calculateTotal = () => {
        const cartTotal = cart.reduce(
          (acc, product) => acc + parseFloat(product.price),
          0
        );
        setTotal(cartTotal.toFixed(2));
      };

      calculateTotal();
    }, [cart]);

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