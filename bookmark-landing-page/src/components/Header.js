import React from 'react'
import logo from '../images/logo-bookmark.svg'
import logoLightMenu from '../images/logo-bookmark-light-menu.svg'
import menu from '../images/icon-hamburger.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import close from '../images/icon-close.svg'

function Header() {
    const [isOpen,setIsOpen] = React.useState(false)
  return (
    <>
    <header className='flex items-center justify-between p-8 max-w-7xl mx-auto'>
        <div>
            <img src={logo} alt="Bookamrk" />
        </div>

        <nav className={`${isOpen && "open"} lg:block`}>
            <div className='flex flex-col  justify-center gap-10'>
                <div className='flex items-center justify-between lg:hidden'>
                    <img src={logoLightMenu} alt="" />
                    <img src={close} alt="" onClick={() => setIsOpen(false)}/>
                </div>
                <ul className='flex flex-col items-center justify-center  text-center lg:text-left lg:flex-row lg:items-center lg:gap-6'>
                    <li className='border-t w-full py-4 lg:border-0 lg:py-0'><button className='uppercase lg:text-xs tracking-wide lg:hover:text-red-400  lg:text-slate-800'>Features</button></li>
                    <li className='border-t w-full py-4 lg:py-0 lg:border-0'><button className=' lg:text-slate-800 uppercase lg:text-xs tracking-wide lg:hover:text-red-400 lg:border-transparent'>Pricing</button></li>
                    <li className='border-t border-b w-full py-4 lg:py-0 lg:border-0'><button className=' lg:text-slate-800 uppercase lg:text-xs tracking-wide lg:hover:text-red-400 lg:border-transparent'>Contact</button></li>
                    <li className='w-full'><button className='uppercase w-full border-2 border-white-100 text-white py-1 px-2 rounded shadow-lg lg:hover:bg-white lg:hover:text-red-400 lg:hover:border-red-400 mt-6 lg:mt-0 lg:bg-red-400 transition'>Login</button></li>
                </ul> 
            </div>

            <ul className='flex items-center justify-center gap-6 lg:hidden'>
                <li><img src={facebook} alt="facebook-ico"/></li>
                <li><img src={twitter} alt="twitter-icon"/></li>
            </ul> 
        </nav>

        <div className='lg:hidden'>
        <button onClick={() => setIsOpen(true)} > 
            <img src={menu} alt="menu-icon"/>
        </button>
        </div>
    </header>
    </>
  )
}

export default Header