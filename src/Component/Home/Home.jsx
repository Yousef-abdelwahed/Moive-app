import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import style from './Home.module.css';

export default function Home() {
  let basUrl='https://image.tmdb.org/t/p/original';
  let [trendingMovie,setTrendingMovie]=useState([]);
  async function getTrindingItems(mediaType,callback)
  {
    let {data}= await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=d3ae77f34fe98eac394d73b253537542`);
    callback(data.results);
      }
      // let navigate=useNavigate();
      // function gotoDetails(id){
      //   navigate({
      //     pathname:'/details',
      //     search:`?id=${id}`
      //   })
      // }
   useEffect(()=>{
    //did amount
    getTrindingItems('movie',setTrendingMovie);
   },[])
  return (
  <div className="row">  
  <div className="col-md-4 d-flex align-items-center">
          <div className='w-100'>
          <div className={`w-25 ${style.brdr} mb-2`}></div>
              <h2>Trending</h2>
              <h2>Movie</h2>
              <h2>to watching now</h2>
            <p className='secondColor mb-3'>Most watched Moies by day</p>
            <div className={style.brdr}></div>
    </div>
    </div>
    {trendingMovie.map((movie,index)=>
    <div   className='col-md-2 my-3' key={index}>
      <Link to={`/moviedetails/${movie.id}`}>
      <div>
        <img src={basUrl+movie.poster_path} className="w-100" alt="" />
      <h5  className='my-3'>{movie.title}</h5>
      </div>
      </Link>
    </div>)}
  </div>

    )
}
