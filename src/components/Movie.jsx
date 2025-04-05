import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import Loader from '../Loader';
import Topnav from './templates/Topnav';
import Cards from './templates/Cards';
import Dropdown from './templates/Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';


const Movie = () => {
    const navigate= useNavigate();
    const[category,setcategory]=useState("now_playing");
    
    const[movie,setmovie]=useState([]);
    const [page, setpage]=useState(1);
    const [hasMore, sethasMore]=useState(true);
   document.title="A2Z Cinemas | Movies ";
 
    const GetMovie=async()=>{
     try{
       const {data} = await axios.get(`/movie/${category}?page=${page}`);
     //   console.log(data);
       if(data.results.length > 0){
         setmovie((prevState)=>[...prevState, ...data.results])
         setpage(page+1)
       }
       
       else{
         sethasMore(false)
       }
       
       // settrending(data.results)
      
     }catch(error){
       console.log(error)
     }
   }
 
   const refreshHandler =()=>{
     if(movie.length===0){
       GetMovie()
     }
     else{
        setpage(1)
       setmovie([])
       GetMovie()
     }
   }
 
 
 
   // console.log(trending)
   useEffect(()=>{
     refreshHandler()  
   },[category])
 
   return movie.length>0 ?(
    <div className='px-[3%] w-full h-full '>
        <div className=' w-full  flex items-center justify-between '>
           
            <h1 className='text-2xl text-zinc-400 font-semibold'>
                <i  onClick={()=>navigate(-1)} className=' hover:text-[#6556CD] ri-arrow-left-line'></i>{" "} Movie<small className='text-sm ml-2 text-zinc-600'>({category})</small></h1>
                
                <div className='flex items-center w-[80%]'>
                <Topnav />
                <Dropdown title="Category" options={["popular","top_rated","upcoming","now_playing"]} func={(e)=>setcategory(e.target.value)}/>
                <div className='w-[2%]'></div>
        </div>
        </div>
          <InfiniteScroll
          dataLength={movie.length}
          next={GetMovie}
          hasMore={hasMore}
          loader={<h1>Loading.....</h1>}>
         <Cards data={movie} title="movie"/>
         </InfiniteScroll>
      
    </div>
  ):<Loader/>
}

export default Movie
