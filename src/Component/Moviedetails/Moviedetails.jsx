import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Moviedetails() {
    let basUrl='https://image.tmdb.org/t/p/original';
    let params=useParams();
    let [moviedails,setMovieDetails]=useState({});
    async function getDetails(){
        let {data}= await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=d3ae77f34fe98eac394d73b253537542`)
        setMovieDetails(data);
        console.log(data)
    }
    useEffect(()=>{getDetails()},[])
  return (
    <>
        <div className='row'>
            <div className=' d-flex align-items-center justify-content-center'>
            <div className='col-md-4 mx-3 m-auto '>
               <img src={basUrl+moviedails.poster_path} className="w-100  " alt="" /> 
               <div></div>
            </div>
            <div className='col-md-8  '>
                <div className='text-left mx-5 '>
                    <h1 className='mt-5'>{moviedails.original_title}</h1>
                    <h4 className='my-3 '>Vote : {moviedails.vote_average}</h4>
                    <h4 className='my-3 '>Vote count : {moviedails.vote_count}</h4>
                    <h4 className='my-3 '>popularity : {moviedails.popularity}</h4>
                    <h4 className='my-3 '>release : {moviedails.release_date}</h4>


                </div>
            </div>
            </div>
            
        </div>
    </>
  )
}
