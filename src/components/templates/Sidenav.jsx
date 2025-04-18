import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from "../../utils/axios"
const Sidenav = () => {
 
  return (
    <div className='w-[20%] h-screen  border-r-2 border-zinc-400 p-10'>
     <h1 className=' text-2xl text-white font-bold'>
     <i className=" text-[#6556CD] ri-tv-fill mr-3"></i>
     <span className='text-2xl'>A2Z Cinemas</span>
     </h1>
     <nav className='flex flex-col text-zinc-400 text-xl gap-2'>
     <h1 className='text-white font-semibold text-xl mt-8 mb-3 '>New Feeds</h1>
     <Link  to="/trending" className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3.5 "><i className="ri-fire-fill"></i> Trending</Link>
     <Link to="/popular" className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3.5 "><i className="ri-bard-fill"></i> Popular</Link>
     <Link to="/movie" className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3.5 "><i className="ri-movie-2-line"></i> Movies</Link>
     <Link to="/tv"className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3.5 "><i className="ri-tv-2-fill"></i> Tv Shows</Link>
     <Link to="/person"className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3.5 "><i className="ri-team-fill"></i> People</Link>
     
     </nav>
     <hr className='bg-zinc-400 mt-3 border-none h-1' />
     <nav className='flex flex-col text-zinc-400 text-xl gap-2'>
     <h1 className='text-white font-semibold text-xl mt-6 mb-3 '>Website Information</h1>
     <Link to="/about" className="hover:bg-[#6556CD] hover:text-white rounded-lg p-4 "><i className="ri-information-fill"></i> About</Link>
     <Link to="/contact" className="hover:bg-[#6556CD] hover:text-white rounded-lg p-4 "><i className="ri-phone-fill"></i> Contact Us</Link>

     </nav>
    </div>
  )
}

export default Sidenav
