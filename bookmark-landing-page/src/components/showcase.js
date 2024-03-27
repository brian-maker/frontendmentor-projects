import React from 'react'
import hero from '../images/illustration-hero.svg'

function Showcase() {
  return (
    <>
    <section className=' flex flex-col-reverse px-8 py-20 lg:grid lg:grid-cols-2 lg:gap-16 max-w-7xl mx-auto lg:place-items-center'>

        <article className='text-center lg:text-left'>
            <h1 className='text-4xl my-8 capitalize lg:text-5xl'>A simple Bookmark manager</h1>
            <p className='px-10 lg:px-0'>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
            <ul className='mt-10 flex items-center justify-center flex-wrap gap-4 lg:justify-start'>
                <li><button className='btn-blue text-white p-3 rounded shadow-lg  border-2 lg:hover:bg-white lg:hover:text-slate-800 lg:hover:border-slate-800'>Get it on Chrome</button></li>
                <li><button className='bg-slate-200 text-slate-800 p-3 rounded shadow-lg border-2  lg:hover:bg-white lg:hover:text-slate-800 lg:hover:border-slate-800'>  Get it on Firefox</button></li>
            </ul>
        </article>
        <article className='relative'>
            <img src={hero} alt="" className='w-full'/>

            <div className="bg"></div>
        </article>
    </section>

    </>
  )
}

export default Showcase