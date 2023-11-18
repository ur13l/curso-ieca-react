const ProductItem = ({product}) => {
    return (<li className="flex flex-col gap-2 p-4 items-center bg-white rounded-xl shadow">
        <img src={product.image} className="w-20" />
        <span className="text-center font-bold">{product.title}</span>
        <span className="text-center font-bold text-sm">${product.price}</span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Añadir al carrito </button>
      </li>)
}

export default ProductItem;