import { useEffect } from "react";
import { useFakestoreApi } from "../hooks/useFakestoreApi";
import ProductItem from "../components/ProductItem";
import { Link } from "react-router-dom";

const Home = () => {
  const { data: products, loading, error, getProducts } = useFakestoreApi();

  useEffect(() => {
    const get = async () => {
      const unsubscribe = await getProducts();
      return () => {
        if (typeof unsubscribe === "function") {
          unsubscribe();
        }
      };
    };
    get();
  }, []);

  return (
    <>
      <div className="text-black">
        <h1>Home</h1>
        {loading ? <span>Cargando...</span> : null}
        {error ? <span>Hubo un error</span> : null}
        {products ? (
          <ul className="grid grid-cols-5 gap-4 ">
            {products.map((product) => (
              <ProductItem product={product} key={product.id} />
            ))}
          </ul>
        ) : null}
      </div>
      {/* Fixed floating button */}
      <Link
        to="/new-product"
        className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        +
      </Link>
    </>
  );
};

export default Home;
