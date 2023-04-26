import React from 'react'
import Model from './Model'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
        <div className="bg-[url('./assets/Homepage-rx7-image-small.webp')]
        lg:bg-[url('./assets/Homepage-rx7-image-large.webp')] h-screen bg-cover bg-center">
        <Navbar />
        <Model />
        </div>

    </div>
  )
}

export default Home