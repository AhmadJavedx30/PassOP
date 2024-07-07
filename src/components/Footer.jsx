import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 flex items-center justify-center flex-col text-white w-full'>
            <div className="logo font-bold text-2xl">
                <span className='text-green-500'> &lt;</span>
                Pass
                <span className='text-green-500'>OP/&gt;</span>
            </div>
            <div className='flex items-center justify-center'>
                Created with <img className='w-8 mx-2' src="icons/heart.png" alt="" /> by Ahmad Javed
            </div>
        </div>
    )
}

export default Footer
