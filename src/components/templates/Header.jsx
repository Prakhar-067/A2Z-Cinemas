// import React from 'react'
// import {Link} from "react-router-dom"
// const Header = ({data}) => {
//   return (
//     <div style={{background:`linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
//     backgroundPosition: 'top 45%',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     // display: 'flex',
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     }} className=' w-screen h-[45vh] flex flex-col justify-end items-start p-[4%] '>
//         <h1 className='w-[70%] text-5xl font-black text-white'>
//         {data.original_title|| data.name || data.title ||data.original_name }
//         </h1>
//         <p className='w-[70%] text-white mt-3 mb-3'>
//             {data.overview.slice(0,200)}...<Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-400">more</Link>
//         </p>
//         <p className='text-white mt-1'>
//         <i className="text-yellow-500 ri-megaphone-fill"></i> {data.release_date||"No Information"}
//         <i className="ml-5 text-yellow-500 ri-album-fill"></i> {data.media_type.toUpperCase()}
//         </p>
//         <Link className='bg-[#6556CD] p-3 rounded text-white mt-2'> Watch Trailer
//         </Link>
      
//     </div>
//   )
// }

// export default Header


import React from 'react'
import { Link } from "react-router-dom"

const Header = ({ data }) => {
  if (!data) {
    return <div className="w-screen h-[45vh] flex items-center justify-center text-white">Loading...</div>;
  }

  return (
    <div style={{
      background: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
      backgroundPosition: 'top 45%',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }} 
    className='w-screen h-[45vh] flex flex-col justify-end items-start p-[4%]'>
      
      <h1 className='w-[70%] text-5xl font-black text-white'>
        {data.original_title || data.name || data.title || data.original_name}
      </h1>
      
      <p className='w-[70%] text-white mt-3 mb-3'>
        {data.overview ? data.overview.slice(0, 200) : "No description available"}...
        <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-400">more</Link>
      </p>

      <p className='text-white mt-1'>
        <i className="text-yellow-500 ri-megaphone-fill"></i> {data.release_date || "No Information"}
        <i className="ml-5 text-yellow-500 ri-album-fill"></i> {data.media_type ? data.media_type.toUpperCase() : "N/A"}
      </p>

      <Link to={`/${data.media_type}/details/${data.id}/trailer`} className='bg-[#6556CD] p-3 rounded text-white mt-2'> Watch Trailer </Link>

    </div>
  )
}

export default Header;
