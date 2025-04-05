import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import ReactPlayer from'react-player'
import NotFound from '../NotFound'

const Trailer = () => {
    const navigate = useNavigate()  // to navigate to previous page using react-router-dom
    const{pathname} = useLocation()
    const category =pathname.includes("movie")? "movie" :"tv"
    const ytvideo=useSelector((state) =>state[category].info.videos)
  return (
    <div className='absolute w-screen h-screen flex items-center justify-center top-0 left-0 z-[100] bg-[rgba(0,0,0,.8)]'>
     <Link  onClick={()=>navigate(-1)} className='absolute hover:text-[#6556CD] ri-close-fill text-3xl text-white top-[5%] right-[5%]'></Link>{" "}
        
     {ytvideo ? (<ReactPlayer controls  height={500} width={1000}  url={`https://www.youtube.com/watch?v=${ytvideo.key}`} />):(<NotFound/>)}
    </div>
  )
}

export default Trailer
