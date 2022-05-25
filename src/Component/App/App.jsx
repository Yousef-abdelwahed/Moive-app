import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import About from '../About/About';
// import Details from '../Details/Details';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Movies from '../Moives/Movies';
import Moviedetails from '../Moviedetails/Moviedetails';
import Navbar from '../Navbar/Navbar';
import NotFound from '../NotFound/NotFound';
import People from '../People/People';
import ProtectedRoute from '../protected/ProtectedRoute';
import Registration from '../Registration/Registration';
import Tvshows from '../Tvshows/Tvshows';

export default function App() {
  let[loginData,setLoginData]=useState(null);
  function setDecodedData(){
    //   let token =localStorage.getItem('token');
      let decodedUserData=jwtDecode(localStorage.getItem('token'));
      setLoginData(decodedUserData);
  }
 useEffect(() => {
     if(localStorage.getItem('token')){
        setDecodedData();
     } 
   },[]);
   const navigate=useNavigate();
  function logout(){
    localStorage.removeItem('token');
    setLoginData(null);
    navigate('/login')
  }
  return (
      <>
      <Navbar loginData={loginData} logout={logout} />
      <div className='container'>
          <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route element={<ProtectedRoute loginData={loginData} /> }>
              <Route path='movies'   element={<Movies/>}></Route>
              <Route path='tvshows' element={<Tvshows/>}></Route>
              <Route path='people'  element={<People/>}></Route>
            
              {/* <Route path='details' element={<Details/>}></Route> */}
          </Route>
          <Route path='moviedetails' element={<Moviedetails/>}>
              <Route path=':id' element={<Moviedetails/>}/>
              </Route>
              <Route path='home'     element={<Home/>}></Route>
              <Route path='about'   element={<About/>}></Route>
              <Route path='login'   element={<Login setDecodedData={setDecodedData} />}></Route>
              <Route path='registeration' element={<Registration/>}></Route>
              <Route path='*' element={<NotFound/>}></Route>


          </Routes>
      </div>

      </>
  )
}
