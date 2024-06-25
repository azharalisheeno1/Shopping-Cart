import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import { CartContext } from "../Features/ContextProvider";
function Hero() {
  const { dispatch } = useContext(CartContext);

  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      

<div className="relative overflow-hidden h-full bg-gray-100">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-400 transform -skew-y-6 translate-y-16"></div>
  <div className="relative z-10 flex flex-wrap justify-center h-full">
    {data.map((product) => (
      <div
        key={product.id}
        className="w-[350px] h-82 rounded-lg overflow-hidden my-5 mx-5 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-transform duration-300 flex flex-col justify-between bg-white"
      >
        <img
          className="w-32 h-32 mx-auto mt-5 object-contain"
          src={product.image}
          alt={product.title}
        />
        <div className="px-4 py-2 flex-1">
          <div className="font-semibold text-lg mb-2">{product.title}</div>
          <p className="text-gray-700 text-sm text-justify">
            {product.description}
          </p>
        </div>
        <div className="px-4 pt-2 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-1">
            Category: {product.category}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-1">
            Price: ${product.price}
          </span>
        </div>
        <div className="px-4 py-2">
          <button
            onClick={() => dispatch({ type: "add", product: product })}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Add to Cart
          </button>
        </div>
      </div>
    ))}
  </div>
</div>


    </>
  );
}

export default Hero;
