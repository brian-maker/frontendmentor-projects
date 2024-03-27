import React from 'react'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import logoLight from '../images/logo-bookmark-light.svg'


function Footer() {
  return (
    <>
    <footer style={{
        background:"hsl(229, 31%, 21%)"
    }} className='py-10 px-8'>
        <div className='max-w-7xl mx-auto flex items-center justify-center gap-6 flex-col text-center md:flex-row md:justify-between'>
            <div className='md:flex md:items-center md:gap-6' >
            <img src={logoLight} alt="" />

            <ul className='mt-6 md:mt-0 md:flex md:gap-4 lg:gap-'>
                <li className='text-white  uppercase lg:hover:text-red-400 cursor-pointer'>Features</li>
                <li className='text-white  uppercase my-4 md:my-0  lg:hover:text-red-400 cursor-pointer'>Pricing</li>
                <li className='text-white  uppercase  lg:hover:text-red-400 cursor-pointer'>Contact</li>
            </ul>

            </div>
            <ul className='flex items-center gap-4 lg:gap-10'>
                <li><button><img src={facebook} alt="" /></button></li>
                <li><button><img src={twitter} alt="" /></button></li>
            </ul>
        </div>
    </footer>
    </>
  )
}

export default Footer