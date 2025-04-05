import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadperson, removeperson } from '../store/actions/personActions';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Loader from '../Loader';
import HorizontalCards from './templates/HorizontalCards';

import Dropdown from './templates/Dropdown';
const PersonDetails = () => {
  const {pathname}=useLocation();
      const navigate = useNavigate();  // to navigate to previous page using react-router-dom
      const {id}=useParams()
      const {info}=useSelector((state)=>state.person)
      const dispatch =useDispatch();
      const [category,setcategory] = useState("movie")
      useEffect(() => {dispatch(asyncloadperson(id))
          return () =>{
              dispatch(removeperson());
          }
      },[id])
  return info ? (<div className='px-[10%] h-[200vh] w-screen flex flex-col bg-[#1F1E24]'>

  <nav className='h-[10vh] w-full text-zinc-100 flex items-center gap-10  text-2xl'>
       <Link  onClick={()=>navigate(-1)} className=' hover:text-[#6556CD] ri-arrow-left-line'></Link>{" "}
       </nav >
       <div className='w-full flex '>
        <div className='w-[20%]'>
        <img className=" shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]  h-[40vh] object-cover"src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`} alt="" />
     <hr className='mt-10 mb-2 w-[92%] border-none h-[2px] bg-zinc-500' />
        <div className='text-xl text-white flex gap-x-5'>
       <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i className=' ri-earth-fill'></i></a>
       <a target="_blank" href={`https://www.facebook.com/${info.externalid.facebook_id}`}><i className=' ri-facebook-circle-fill'></i></a>
       <a target="_blank" href={`https://www.instagram.com/${info.externalid.instagram_id}`}><i className=' ri-instagram-fill'></i></a>
       <a target="_blank" href={`https://twitter.com/${info.externalid.twitter_id}`}><i className=' ri-twitter-x-fill'></i></a>
             
        </div>
        <h1 className='text-2xl text-zinc-400 font-semibold my-2'>Person Info</h1>
        <h1  className='text-lg text-zinc-400 font-semibold mt-2 '>
          Known For 
          </h1>
        <h1 className=' text-zinc-400 ' >
          {info.detail.known_for_department} 
          </h1>
        <h1  className='text-lg text-zinc-400 font-semibold mt-2'>
          Gender
          </h1>
        <h1 className=' text-zinc-400 ' >
          {info.detail.gender === 2 ? 'Male' : 'Female'} 
          </h1>
        <h1  className='text-lg text-zinc-400 font-semibold mt-2'>
         Birthday
          </h1>
        <h1 className=' text-zinc-400 ' >
          {info.detail.birthday} 
          </h1>
        <h1  className='text-lg text-zinc-400 font-semibold mt-2 '>
          Deathday
          </h1>
        <h1 className=' text-zinc-400 ' >
           {info.detail.birthday?info.detail.birthday:"still alive"}
          </h1>
        <h1  className='text-lg text-zinc-400 font-semibold mt-2'>
          Place Of Birth
          </h1>
        <h1 className=' text-zinc-400 ' >
           {info.detail.place_of_birth}
          </h1>
        <h1  className='text-lg text-zinc-400 font-semibold mt-2'>
          Also Known As
          </h1>
        <h1 className=' text-zinc-400 ' >
           {info.detail.also_known_as}
          </h1>
        
        </div>
        <div className='w-[80%] ml-[5%]'>
        <h1 className='text-6xl text-zinc-400 font-black my-2'>{info.detail.name}</h1>
        <h1  className='text-xl text-zinc-400 font-semibold mt-2 '>
          Biography
          </h1>
          <p className='text-zinc-400 mt-3'>{info.detail.biography}</p>
       
          <h1  className='mt-5 text-xg text-zinc-400 font-semibold mt-2 '>
          Known For
          </h1>
          <HorizontalCards data={info.combinedCredits.cast} />
          <div className='w-full flex justify-between'>
          <h1  className='mt-5 text-xl text-zinc-400 font-semibold'>
          Acting
          </h1>
          <Dropdown title="Catgory" options={["tv","movie"]} func={(e)=>setcategory(e.target.value)}/>
           
          
          
          </div>
       <ul className='w-full list-disc text-zinc-400 mt-2 h-[50vh]  overflow-x-hidden overflow-y-auto shadow-lg shadow-[rgba(255,255,255,.3)] border-2 border-zinc-700 p-5'>
        {info[category+'Credits'].cast.map((c,i)=>(
          <li  key={i} className=' hover:text-white p-4 duration-300 cursor-pointer'>
          <Link className='flex flex-col' to={`/${category}/details/${c.id}`}>
          <span>{c.original_title|| c.name || c.title ||c.original_name }</span>
          <span className='block ml-5'> {c.character && `Character Name: ${c.character}`}</span>
          </Link>
          </li>
        ))}
        
        
        
       </ul>

        </div>

       </div>





  </div>) : (<Loader/>);
}

export default PersonDetails
