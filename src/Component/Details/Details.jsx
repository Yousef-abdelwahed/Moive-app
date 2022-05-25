// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';

// export default function Details() {
// let [searchParams,getSearchParams]=useSearchParams();
// let [detailsMovies,getDetailsMovies]=useState({});
//   let curentId=searchParams.get('id')  ;
//   async function gotoDetails(){
//     let {data}= await axios.get(`https://api.themoviedb.org/3/all/${curentId}?api_key=d3ae77f34fe98eac394d73b253537542&language=en-US`)
//     getDetailsMovies(data)
//   }
//   useEffect(()=>{gotoDetails();},[])
//   return (
//     <div>{detailsMovies.overview}</div>
//   )
// }
