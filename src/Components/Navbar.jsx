import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../Features/ContextProvider';
export function Navbar() {
const {cart}=  useContext(CartContext)


  return (
    <>

<nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-lg font-bold">
          <NavLink to="/">Shopping Cart</NavLink>
        </div>
        <div className="flex items-center space-x-4">
       <NavLink to="/cart">
          <button className="text-white flex items-center">
            <FaShoppingCart size={40} className="mr-2" /> 
            
            <span
    className="absolute rounded-full py-1 px-1 text-xs font-medium content-[''] leading-none grid place-items-center md:top-[3%] md:right-[2%] translate-x-2/4  -translate-y-2/4 bg-red-500 text-white min-w-[20px] min-h-[18px]">
   {cart.length}
  </span>
          
          </button>
          </NavLink>
        </div>
      </div>
    </nav>


    </>
  )
}

// export default Navbar