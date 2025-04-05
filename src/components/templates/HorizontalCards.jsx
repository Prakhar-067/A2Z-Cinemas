// // import React from 'react'
// // import Dropdown from './Dropdown'
// // import { Link } from 'react-router-dom'

// // const HorizontalCards = ({data}) => {
// //   return (
    
     
// //      <div className='w-full h-[35vh] flex overflow-y-hidden p-2'>
// //         {data.map((d,i)=> (
          
// //                 <Link to={`/${d.media_type}/details/${d.id}`} key={i} className="min-w-[12%]  bg-zinc-900 mr-5">
// //                     <img  className="w-full h-[45%] object-cover"src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path})`} alt="" />
// //                <div>
// //                <h1 className=' text-2xl leading-none mt-1 text-xl font-black text-white'>
// //         {d.original_title|| d.name || d.title ||d.original_name }
// //         </h1>
// //         <p className=' text-white mt-3 leading-none'>
// //             {d.overview.slice(0,50)}...<span className="text-zinc-400">more</span>
// //         </p>
// //                </div>
// //             </Link>))}
                

// //      </div>
    
      
 
// //   )
// // }

// // export default HorizontalCards

// import React from 'react'
// import { Link } from 'react-router-dom'

// const HorizontalCards = ({ data = [] }) => {
//   if (!data.length) {
//     return <p className="text-white">Loading...</p>;
//   }

//   return (
//     <div className="w-full h-[35vh] flex overflow-y-hidden p-2">
//       {data.map((d, i) => (
//         <Link to={`/${d.media_type}/details/${d.id}`} key={i} className="min-w-[12%] bg-zinc-900 mr-5">
//           <img
//             className="w-full h-[45%] object-cover"
//             src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path}`}
//             alt={d.original_title || d.name || d.title || d.original_name}
//           />
//           <div className='overflow-y-auto'>
//             <h1 className="text-2xl leading-none mt-1 text-xl font-black text-white">
//               {d.original_title || d.name || d.title || d.original_name}
//             </h1>
//             <p className="text-white mt-3 leading-none">
//               {d.overview ? `${d.overview.slice(0, 50)}...` : "No description available"}{" "}
//               <span className="text-zinc-400">more</span>
//             </p>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default HorizontalCards;

import React from 'react';
import { Link } from 'react-router-dom';
import noimage from "/noimage.png"
const HorizontalCards = ({ data = [] }) => {
  if (!data.length) {
    return <p className=" text-3xl mt-5 text-center text-white">Nothing to Show</p>;
  }

  return (
    <div className="w-full h-[35vh] flex overflow-x-auto p-2">
      {data.map((d, i) => (
        <Link
          to={`/${d.media_type}/details/${d.id}`}
          key={i}
          className="min-w-[12%] bg-zinc-900 mr-5 flex flex-col h-full"
        >
          <img
            className="w-full h-[50%] object-cover"
            src={d.backdrop_path || d.poster_path?`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path}`:noimage}
            alt={d.original_title || d.name || d.title || d.original_name}
          />
          {/* Ensure text content overflows properly */}
          <div className="h-[50%] overflow-y-auto p-2">
            <h1 className="text-xl font-black text-white">
              {d.original_title || d.name || d.title || d.original_name}
            </h1>
            <p className="text-white mt-1">
              {d.overview ? `${d.overview.slice(0, 50)}...` : "No description available"}{" "}
              <span className="text-zinc-400">more</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HorizontalCards;

