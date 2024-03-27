import React from 'react'

function Cta() {
  return (
    <>
    <section className='btn-blue max-w-7 mx-auto text-center mt-20'>
        <div className='py-10'>
            <h3 className='text-white font-normal text-sm uppercase tracking-widest pt-8'>35,000+ already joined</h3>
            <h2 className='text-white text-3xl  my-8 lg:text-4xl  lg:w-96 lg:mx-auto px-7 lg:px-0'>Stay up to date with what we're doing</h2>

            <form className='flex flex-col gap-4 md:flex-row md:items-center md:justify-center md:max-w-xl md:mx-auto mx-10'>
                <input type="email" name="email" id="email" placeholder='Enter your email address' required  className='w-full py-3 px-4 rounded shadow-lg outline-0 '/>
                <button type='submit' className='btn-red text-white py-3 px-4 rounded shadow-lg md:w-40 lg:hover:bg-white lg:hover:text-red-400 border-0 lg:border-2 lg:hover:border-red-400'>Contact Us</button>
            </form>
        </div>
    </section>
    </>
  )
}

export default Cta