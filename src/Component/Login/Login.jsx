import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import App from '../App/App';

export default function Login({setDecodedData}) {
  let [user,setUserData]=useState({email:"",password:""});
  let [errorMes,setErrorMes]=useState("");
  let [errorList,setErrorList]=useState([]);
  let [loading,setLoading]=useState(false)
  async function submitFormData(e)
  {
    e.preventDefault();
    setLoading(true);
    let validateResultLogin=validationForm();
    if(validateResultLogin.error)
    {
        setErrorList(validateResultLogin.error.details);
        setLoading(false);
    }else
    {
          let {data}= await axios.post(`https://routeegypt.herokuapp.com/signin`,user)
          if(data.message ==='success')
                {
                 localStorage.setItem('token',data.token);
                 setDecodedData();
                 
                  gotHome();
                }else 
                {
                  setErrorMes(data.message);
                }
      }
            setLoading(false);
    }
  const navigate=useNavigate();
  function gotHome(){
    let path='/home';
    navigate(path)
  }
  function validationForm(){
    let schema=Joi.object({
      email:Joi.string().required().email({tlds:{allow:['com','net']}}),
      password:Joi.string().required().min(3).max(12)
    }); return schema.validate(user,{abortEarly:false})
  }
  function getFormValue(e){
    let myUSer={...user};
    myUSer[e.target.name]=e.target.value;
    setUserData(myUSer);
    console.log(myUSer);
  }
  return (
  <>
    <div className='row'>
    <div >
    <div className='w-75 m-auto '>
      {errorMes? <div className='alert alert-danger'>{errorMes}</div>:''}
      {errorList.map((error,index)=><div className='alert alert-danger' key={index}>{error.message}</div>)}
          <h1 className='my-3' >Login</h1>
        <form onSubmit={submitFormData}>
        <div>
            <label htmlFor="email"className='my-2'>Email :</label>
            <input onChange={getFormValue} type="email" className='form-control' name='email' />
        </div>
        <div className='input-gp my-2'>
            <label htmlFor="password"className='my-2'>Password :</label>
            <input onChange={getFormValue}  type="password" className='form-control' name='password' />
        </div>
        <button className='btn btn-info float-end my-3' type='submit'>{loading? <i className='fa fa-spinner fa-spin'></i>:"Login"}</button>
        <div className="clearfix"></div>
        </form>
      </div>
    </div>
    </div>
  </>)}
 