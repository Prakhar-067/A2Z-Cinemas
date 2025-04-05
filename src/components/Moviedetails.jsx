import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadmovie, removemovie } from '../store/actions/movieActions';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import Loader from '../Loader';
import HorizontalCards from './templates/HorizontalCards';
import Trailer from './templates/Trailer';


const Moviedetails = () => {
    const {pathname}=useLocation();
    const navigate = useNavigate();  // to navigate to previous page using react-router-dom
    const {id}=useParams()
    const {info}=useSelector((state)=>state.movie)
    const dispatch =useDispatch();
    useEffect(() => {dispatch(asyncloadmovie(id))
        return () =>{
            dispatch(removemovie());
        }
    },[id])
  return info ?(
    <div style={{background:`linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path })`,
    backgroundPosition: 'top 45%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
    
    }}
    className='relative w-screen min-h-[120vh] max-h-[150vh] px-[10%]'>
     <nav className='h-[10vh] w-full text-zinc-100 flex items-center gap-10  text-2xl'>
     <Link  onClick={()=>navigate(-1)} className=' hover:text-[#6556CD] ri-arrow-left-line'></Link>{" "}
     <a target="_blank" href={info.detail.homepage}><i className=' ri-external-link-fill'></i></a>
     <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i className=' ri-earth-fill'></i></a>
     <a target="_blank" href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}>imdb</a>
     </nav >
    
     <div className='w-full flex '>
        
        <img className=" shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]  mt-2 h-[50vh] object-cover"src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path}`} alt="" />
        
     <div className='content ml-[5%] text-white'>
        <h1 className='text-5xl font-black text-white'>
     {info.detail.original_title|| info.detail.name || info.detail.title ||info.detail.original_name }
     <small className='text-2xl font-bold text-zinc-200'>({info.detail.release_date.split("-")[0]})</small>
     </h1>
     <div className='flex text-white items-center gap-x-5 mt-2 mb-3'>
    <span className=' bg-yellow-700 text-white w-[5vh] h-[5vh] rounded-full tex-2xl flex justify-center items-center font-semibold'>{(info.detail.vote_average*10).toFixed()}%</span>
         <h1 className='font-semibold text-2xl w-[60px] leading-6'>User Score</h1>
         <h1>{info.detail.release_date}</h1>
         <h1>{info.detail.genres.map((g)=>g.name).join(",")}</h1>
         <h1>{info.detail.runtime} min</h1>

     </div>

     <h1 className='text-xl font-semibold italic text-zinc-200'>
        {info.detail.tagline}
     </h1>
     <h1 className='text-2xl mt-3 mb-1 '>
        Overview
     </h1>
     <p className='leading-4.5' >
        {info.detail.overview}
     </p>
     <h1 className='text-2xl mt-3 mb-1 '>
        Movie Translated
     </h1>
     <p className='leading-4.5 mb-2'>
        {info.translations.join(", ")}
     </p>
     <Link className="px-4 py-1  bg-[#6556CD] rounded-lg"to={`${pathname}/trailer`}> <i className="text-xl mr-1 ri-play-fill"></i>Play Tralier</Link>

    

             
       
     
     
     
     
     
     </div>

     </div>

     <div className='w-[80%] flex flex-col gap-y-3 mt-5'>
     
    
     {info?.watchproviders?.flatrate && (
  <div className="flex gap-x-5 items-center text-white">
    <h1>Available on Flatrate</h1>
    {info.watchproviders.flatrate.map((w) => (
      <img
      title={w.provider_name}
        key={w.logo_path} 
        className="w-[5vh] h-[5vh] object-cover rounded-md"
        src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
        alt="not found"
      />
    ))}
  </div>
)}

{info?.watchproviders?.rent && (
  <div className="flex gap-x-5 items-center text-white">
    <h1>Available on Rent</h1>
    {info.watchproviders.rent.map((w) => (
      <img
      title={w.provider_name}
        key={w.logo_path} // Add a unique key
        className="w-[5vh] h-[5vh] object-cover rounded-md"
        src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
        alt="not found"
      />
    ))}
  </div>
)}



{info?.watchproviders?.buy && (
  <div className="flex gap-x-5 items-center text-white">
    <h1>Available to Buy</h1>
    {info.watchproviders.buy.map((w) => (
      <img
        title={w.provider_name}
        key={w.logo_path} // Add a unique key
        className="w-[5vh] h-[5vh] object-cover rounded-md"
        src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
        alt="not found"
      />
    ))}
  </div>
)}
     </div>
     <hr className='mt-10 mb-5 border-none h-[2px] bg-zinc-500' />
      <h1 className='text-3xl font-bold  text-white'>Recommendations & Similar Stuff</h1>
     <HorizontalCards data={info.recommendations.length>0 ? info.recommendations : info.similar}/>

    
    <Outlet />


     </div>
   
   
  ):<Loader/>
}

export default Moviedetails
