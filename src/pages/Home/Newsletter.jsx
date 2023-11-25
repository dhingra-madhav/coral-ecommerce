import React from 'react'
import { Link } from 'react-router-dom'

const Newsletter = () => {
  return (
    <div className='bg-[#1E2832] bg-opacity-5 xl:px-28 px-4 py-16'>
         <h2 className="text-3xl font-extrabold text-center capitalize mb-8" style={{ color: '#2d3748', letterSpacing: '1px', textShadow: '2px 2px 6px rgba(45, 55, 72, 0.2)' }}>
  🌟 Fashion Forward: Explore Our New Arrivals 🌟
</h2>



        {/* insta grid */}
        <div className='flex flex-wrap gap-4 items-center justify-center mb-20'>
            <Link><img src="/images/instagram/img1.png" alt="" /></Link>
            <Link><img src="/images/instagram/img2.png" alt="" /></Link>
            <Link><img src="/images/instagram/img3.png" alt="" /></Link>
            <Link><img src="/images/instagram/img4.png" alt="" /></Link>
            <Link><img src="/images/instagram/img5.png" alt="" /></Link>
            <Link><img src="/images/instagram/img6.png" alt="" /></Link>
        </div>

        {/* newsletter */}
        <div>
        <h2 className="text-3xl font-semibold text-center capitalize mb-8">
        Subscribe to the newsletter...
        </h2>
        <form className='md:w-1/2 mx-auto text-center'>
            <input type="email" name="email" id="email" placeholder='Email address...' className='h-8 bg-transparent outline-none border-b-2 pl-2 border-black md:w-2/3 w-full mb-5 placeholder:text-black/50 mr-4'/>
            <input type="submit" value="SUBMIT" className='bg-black text-white px-6 py-1 rounded-md' />
        </form>
        </div>
    </div>
  )
}

export default Newsletter