import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFakestoreApi } from "../../hooks/useFakestoreApi";

const NewProduct = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });
  const { loading, error, storeNewProduct } = useFakestoreApi();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await storeNewProduct(form);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col w-full h-full items-center">
      <div className="flex flex-col items-center justify-center min-w-[400px] h-fit bg-slate-200 rounded-md p-8">
        <h1 className="text-2xl font-bold text-slate-900">Nuevo producto</h1>
        <form
          className="flex flex-col w-full mt-4 text-slate-900"
          onSubmit={handleSubmit}
        >
          {/* Add form with fields title, description, price, image (as an input text link) */}
          <input
            type="text"
            placeholder="Título"
            className="w-full p-2 rounded-md border border-slate-300 focus:outline-none focus:border-slate-500"
            name="title"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Descripción"
            className="w-full p-2 mt-2 rounded-md border border-slate-300 focus:outline-none focus:border-slate-500"
            name="description"
            onChange={handleChange}
          />

          <input
            type="number"
            placeholder="Precio"
            className="w-full p-2 mt-2 rounded-md border border-slate-300 focus:outline-none focus:border-slate-500"
            name="price"
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Imagen (https://...)"
            className="w-full p-2 mt-2 rounded-md border border-slate-300 focus:outline-none focus:border-slate-500"
            name="image"
            onChange={handleChange}
          />

          <button
            type="submit"
            className={`w-full p-2 mt-4 bg-slate-500 text-white rounded-md hover:bg-slate-600 ${
              loading ? "bg-slate-200 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Cargando..." : "Crear Producto"}
          </button>
          {error ? <span className="text-red-500 mt-2">{error}</span> : null}
        </form>
      </div>
    </div>
  );
};

export default NewProduct;
