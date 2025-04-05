import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from '../../utils/axios'
import noimage from '/noimage.png'
const Topnav = () => {
   const [query,setquery]=useState("");
   const[searches,setsearches]=useState([])
    const GetSerches=async()=>{
       try{
         const {data} = await axios.get(`/search/multi?query=${query}`);
       
         setsearches(data.results)
       }catch(error){
         console.log(error)
       }
     }
     useEffect(()=>{
       GetSerches();
     },[query]);
  return (
    <div className='w-[80%] h-[10vh] relative flex mx-auto  items-center pt-5 pb-3'>
      <i className="text-zinc-400 text-3xl ri-search-line"></i>
      <input 
      onChange={(e)=>setquery(e.target.value)}
      value={query}
      
      className="  text-zinc-200  w-[50%] text-xl p-4 mx-10 outline-none border-none bg-tranparent" type="text" placeholder='search anything' />
      {query.length > 0 && (<i onClick={()=>setquery("")}
      className=" text-zinc-400 text-3xl ri-close-fill right-0"></i>)}
      
      <div className="w-[50%] max-h-[50vh] bg-zinc-200 z-[100] absolute top-[95%] left-[7.25%] overflow-auto rounded" >
        {searches.map((s,i)=> (<Link to={`/${s.media_type}/details/${s.id}`}key={i} className='hover:text-black hover:bg-zinc-300 duration-300 text-zinc-600 font-semibold w-[100%] p-5 flex justify-start items-center  border-b-2 border-zinc-100 '>
        <img className='w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg'
            src={s.backdrop_path || s.profile_path?`https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`:noimage} alt="" />
        <span>{s.original_title|| s.name || s.title ||s.original_name }</span>
        </Link>))}
       
        
        
      </div>
    </div>
  )
}

export default Topnav
