import React from 'react'
import { Link } from 'react-router-dom'
import noimage from "/noimage.png"

const Cards = ({data,title}) => {
 
  return (
    <div className='flex flex-wrap w-full h-full px-2 py-3 bg-[#1F1E24]'>
     {data.map((c,i)=>(
        <Link to={`/${c.media_type || title}/details/${c.id}`}className=" relative w-[29vh] mr-[5%] mb-[5%]" key={i}>
            <img className=" shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover"src={ c.poster_path||c.backdrop_path||c.profile_path?`https://image.tmdb.org/t/p/original/${  c.poster_path||c.backdrop_path||c.profile_path}`:noimage} alt="" />
             <h1 className='text-2xl text-zinc-400 mt-3 font-semibold '>
             {c.original_title|| c.name || c.title ||c.original_name }

             </h1>

             {c.vote_average && (
             <div className='absolute right-[-1%] bottom-[30%] bg-yellow-700 text-white w-[5vh] h-[5vh] rounded-full tex-2xl flex justify-center items-center font-semibold'>{(c.vote_average*10).toFixed()}%</div>

             ) }

        </Link>
     ))}
    </div>
  )
}

export default Cards
