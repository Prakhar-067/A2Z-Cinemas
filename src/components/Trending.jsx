// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import Topnav from './templates/Topnav'
// import Dropdown from './templates/Dropdown'
// import axios from '../utils/axios'
// import Cards from './templates/Cards'
// import Loader from '../Loader'
// import InfiniteScroll from 'react-infinite-scroll-component'; 

// const Trending = () => {
//    const navigate= useNavigate();
//    const[category,setcategory]=useState("all");
//    const[duration,setduration]=useState("day");
//    const[trending,settrending]=useState([]);
//    const [page, setpage]=useState(1);
//    const [hasMore, sethasMore]=useState(true);
//    const GetTrending=async()=>{
//     try{
//       const {data} = await axios.get(`/trending/${category}/${duration}?page=${page}`);
//       if(data.results.length > 0){
//         settrending((prevState)=>[...prevState, ...data.results])
//         setpage(page+1)
//       }
//       else{
//         sethasMore(false)
//       }
      
//       // settrending(data.results)
     
//     }catch(error){
//       console.log(error)
//     }
//   }

//   const refreshHandler =()=>{
//     if(trending.length>0){
//       GetTrending()
//     }
//     else{
//        setpage(1)
//       settrending([])
//       GetTrending()
//     }
//   }



//   // console.log(trending)
//   useEffect(()=>{
//     refreshHandler()  
//   },[category,duration])
//   return trending.length>0 ?(
//     <div className='px-[3%] w-full h-full '>
//         <div className=' w-full  flex items-center justify-between '>
           
//             <h1 className='text-2xl text-zinc-400 font-semibold'>
//                 <i  onClick={()=>navigate(-1)} className=' hover:text-[#6556CD] ri-arrow-left-line'></i> Trending</h1>
                
//                 <div className='flex items-center w-[80%]'>
//                 <Topnav />
//                 <Dropdown title="Category" options={["movie","tv","all"]} func={(e)=>setcategory(e.target.value)}/>
//                 <div className='w-[2%]'></div>
//                 <Dropdown title="Category" options={["week","day"]} func={(e)=>setduration(e.target.value)}/>
//         </div>
//         </div>
//           <InfiniteScroll
//           dataLength={trending.length}
//           next={GetTrending}
//           hasMore={hasMore}
//           loader={<h1>Loading.....</h1>}>
//          <Cards data={trending} title={category}/>
//          </InfiniteScroll>
      
//     </div>
//   ):<Loader/>
// }

// export default Trending


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Topnav from './templates/Topnav';
import Dropdown from './templates/Dropdown';
import axios from '../utils/axios';
import Cards from './templates/Cards';
import Loader from '../Loader';
import InfiniteScroll from 'react-infinite-scroll-component';
const Trending = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title="A2Z Cinemas | Trending ";

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
      
      if (page === 1) {
        setTrending(data.results);  // Reset data for new category
      } else {
        setTrending((prevState) => [...prevState, ...data.results]);
      }

      if (data.results.length > 0) {
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setPage(1);
    setTrending([]);
    setHasMore(true);
    GetTrending();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className="px-[3%] w-full min-h-screen overflow-auto">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <i onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line"></i> Trending
        </h1>

        <div className="flex items-center w-[80%]">
          <Topnav />
          <Dropdown title="Category" options={["movie", "tv", "all"]} func={(e) => setCategory(e.target.value)} />
          <div className="w-[2%]"></div>
          <Dropdown title="Duration" options={["week", "day"]} func={(e) => setDuration(e.target.value)} />
        </div>
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        next={GetTrending}
        hasMore={hasMore}
        loader={<h1>Loading.....</h1>}
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default Trending;
