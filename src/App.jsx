import React, { useEffect, useState } from 'react'
import { Navbar } from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'
import Loader from './Components/Loader'


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading state
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating a 2-second delay for loading content
  }, []);
  return (
    <>
    <Navbar></Navbar>
    {loading ? (
        <Loader />
      ) : (
        <>
          <Outlet />
          <Footer></Footer>
        </>
      )}
    

    </>
  )
}

export default App