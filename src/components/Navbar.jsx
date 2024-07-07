import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
      <div className="mycontainer flex items-center justify-between px-4 py-5 h-14">
        <div className="logo font-bold text-2xl">
          <span className='text-green-500'> &lt;</span>
          Pass 
          <span className='text-green-500'>OP/&gt;</span>
        </div>
        {/* <ul className='flex gap-4'>
          <li><a className='hover:font-bold' href="/">Home</a></li>
          <li><a className='hover:font-bold' href="about">About</a></li>
          <li><a className='hover:font-bold' href="contact">Contact</a></li>
        </ul> */}
        <button className='text-white bg-green-700 flex items-center justify-center rounded-full'>
          <img className='invert p-1 w-10' src="icons/github.svg" alt="github logo" />
          <span className='font-bold px-2'>GitHub</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
