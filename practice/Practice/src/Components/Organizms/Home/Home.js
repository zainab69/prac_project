import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart, cartProducts, loadingData } from "../../../Actions/Actions";
import CustomLoader from "../../Atoms/customLoader/customLoader";
import Pagination from "../../Molecules/Pagination/Pagination";
const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const searchQuery = useSelector((state) => state.searchQuery);
  const loading = useSelector((state) => state.loading);
  const currentPage = useSelector((state) => state.currentpage);
  const perPage = useSelector((state) => state.perpage);
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(loadingData(true));
        const response = await axios.get("https://fakestoreapi.com/products");
        const data = response.data;
        console.log(data, "for overall data");
        dispatch(cartProducts(data));
        dispatch(loadingData(false));
      } catch (error) {
        dispatch(loadingData(false));
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (products.length > 0) {
      let filteredProducts = products;

      if (searchQuery) {
        filteredProducts = filteredProducts.filter((item) =>
          item.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      // else if (val) {
      //   filteredProducts = filteredProducts.filter(
      //     (item) => item.category === val
      //   );
      // setFiltered(filteredProducts);

      // }

      setFiltered(filteredProducts);
    }
  }, [products, searchQuery]);
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedProducts = filtered.slice(startIndex, endIndex);
  const addToCart = (product) => {
    dispatch(addtoCart(product));
  };

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-8">Products</h1>
      {loading ? (
        <CustomLoader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedProducts.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg p-6">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h2 className="text-2xl font-bold text-blue-500 mb-2">
                {item.category}
              </h2>
              <p className="text-gray-700 mb-4">{item.title}</p>
              <p className="text-xl font-semibold text-gray-900 mb-4">
                ${item.price}
              </p>
              <button
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
      <Pagination />
    </div>
  );
};

export default Home;
