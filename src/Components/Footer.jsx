import React from 'react'

function Footer() {
  return (
    <>
     <footer className="bg-gray-800 top-0 bottom-0 text-white py-6 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">Shopping Cart</h1>
          <p className="text-sm">© 2024 Shopping Cart. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a  className="text-sm hover:text-gray-400">About Us</a>
          <a  className="text-sm hover:text-gray-400">Contact</a>
          <a  className="text-sm hover:text-gray-400">Privacy Policy</a>
          <a  className="text-sm hover:text-gray-400">Terms of Service</a>
        </div>
      </div>
    </footer>
    
    
    </>
  )
}

export default Footer