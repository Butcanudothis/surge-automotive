import React from 'react'
import Navbar from './Navbar'

const ComingSoon = () => {
  return (
    // add a coming soon page and link it to the navbar and style it using tailwind
    <>
    < Navbar />
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
        <h1 className="text-9xl text-white">Coming Soon</h1>
        <h2 className="text-2xl text-white">This page is under construction</h2>
    </div>

    </>

  )
}

export default ComingSoon