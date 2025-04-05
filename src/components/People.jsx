import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import Loader from '../Loader';
import Topnav from './templates/Topnav';
import Cards from './templates/Cards';
import Dropdown from './templates/Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';


const People = () => {
    const navigate= useNavigate();
    const[category,setcategory]=useState("popular");
    
    const[person,setperson]=useState([]);
    const [page, setpage]=useState(1);
    const [hasMore, sethasMore]=useState(true);
   document.title="A2Z Cinemas | person Shows ";
 
    const GetPerson=async()=>{
     try{
       const {data} = await axios.get(`/person/${category}?page=${page}`);
     //   console.log(data);
       if(data.results.length > 0){
         setperson((prevState)=>[...prevState, ...data.results])
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
     if(person.length===0){
       GetPerson()
     }
     else{
        setpage(1)
       setperson([])
       GetPerson()
     }
   }
 
 
 
   // console.log(trending)
   useEffect(()=>{
     refreshHandler()  
   },[category])
 
   return person.length>0 ?(
    <div className='px-[3%] w-full h-full '>
        <div className=' w-full  flex items-center justify-between '>
           
            <h1 className='text-2xl text-zinc-400 font-semibold'>
                <i  onClick={()=>navigate(-1)} className=' hover:text-[#6556CD] ri-arrow-left-line'></i>{" "} People </h1>
                
                <div className='flex items-center w-[80%]'>
                <Topnav />
                {/* <Dropdown title="Category" options={["popular","top_rated","on_the_air","airing_today"]} func={(e)=>setcategory(e.target.value)}/> */}
                <div className='w-[2%]'></div>
        </div>
        </div>
          <InfiniteScroll
          dataLength={person.length}
          next={GetPerson}
          hasMore={hasMore}
          loader={<h1>Loading.....</h1>}>
         <Cards data={person} title="person"/>
         </InfiniteScroll>
      
    </div>
  ):<Loader/>
}

export default People
