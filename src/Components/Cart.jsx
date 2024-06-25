import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";
function Cart() {
  const { cart, dispatch } = useContext(CartContext);

  
  return (
    <>
      <div className="  mx-auto p-10  bg-gray-700">
        {/* <!-- Cart Component --> */}
     
        <div className="flex flex-col h-screen lg:flex-row  gap-6">
          {/* <!-- Product List --> */}
          <div className="md:w-[1200px]  mx-auto  ">
            {cart.map((product) => (
              <>
                <div className="space-y-4 my-5 hover:scale-105">
                  {/* <!-- Product Item --> */}
                  <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
                    <img
                      src={product.image}
                      alt="Product Image"
                      className="w-24 h-24 object-cover rounded-md"
                    />
                    <div className="ml-4 flex-1">
                      <h3 className="text-lg font-semibold">{product.title}</h3>
                      <p className="text-lg font-semibold my-2">
                        RS {product.price}
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        dispatch({ type: "remove", id: product.id })
                      }
                      className="ml-auto text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                  {/* <!-- Repeat Product Item as needed --> */}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
