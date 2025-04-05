import React, { useState,useEffect } from 'react'
import Sidenav from './templates/Sidenav'
import Topnav from './templates/Topnav'
import axios from '../../src/utils/axios'
import Header from './templates/Header'
import HorizontalCards from './templates/HorizontalCards'
import Dropdown from './templates/Dropdown'
import Loader from '../Loader'

const Home = () => {
    document.title="A2Z Cinemas | Home"
    const [wallpaper,setwallpaper]=useState(null)
    const [trending,settrending]=useState(null)
    const [category,setcategory]=useState("all")

    const Getheaderwallpaper=async()=>{
      try{
        const {data} = await axios.get(`/trending/all/day`);
      
        let randomdata=data.results[(Math.random()*data.results.length).toFixed()];
        setwallpaper(randomdata)
      }catch(error){
        console.log(error)
      }
    }
   
    

    const GetTrending=async()=>{
      try{
        const {data} = await axios.get(`/trending/${category}/day`);
      
        
        settrending(data.results)
      }catch(error){
        console.log(error)
      }
    }
    useEffect(()=>{
      !wallpaper && Getheaderwallpaper();
       GetTrending();
    },[category]);
   
    
  return wallpaper && trending? (
    <>
    <Sidenav/>
    <div className='w-[80%] h-full '>
      <Topnav className="overflow-x-hidden "/>
      <Header className="overflow-x-hidden" data={wallpaper}/>
      <div className='px-12 my-2 flex justify-between'>
        <h1 className='text-3xl text-zinc-400 font-semibold '>Trending</h1>
        <Dropdown title="Filter" options={['tv','movie','all']} func={(e)=> setcategory(e.target.value)} />
     </div>
      <HorizontalCards data={trending}/>
    </div>
    </>
  ):<Loader/>
}

export default Home
