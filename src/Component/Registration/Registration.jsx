import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
export default function Registration() {
  let[user,setUser]=useState({first_name:"",last_name:"", age:"",email:"",password:""});
  let[errorMas,setErrorMas]=useState('');
  let [errorList,setErrorList]=useState([]);
  let [loading,setloading]=useState(false);
 async function submitFormData(e){
  e.preventDefault();
  setloading(true);
  let validationResult=valedatForm();
  if(validationResult.error){
    setErrorList(validationResult.error.details);
    setloading(false);
  }else{
     let {data}= await axios.post(`https://routeegypt.herokuapp.com/signup`,user)
      if(data.message==='success'){
        gotLogin();
        }else{
                setErrorMas(data.message);
              }
              setloading(false);
  }
 }
 const navigate=useNavigate();
 function gotLogin(){
   let path='/login';
   navigate(path)
 }
function valedatForm(){
  let schema=Joi.object({
    first_name:Joi.string().required().alphanum().min(3).max(12),
    last_name:Joi.string().required().alphanum().min(3).max(12),
    age:Joi.number().required().min(18).max(50),
    email:Joi.string().required().email({tlds:{allow:['com','net']}}),
    password:Joi.string().required().min(3).max(12)
  }); return schema.validate(user,{abortEarly:false})
}
  function getFormValue(e){
   let myUser={...user}
   myUser[e.target.name]=e.target.value;
   setUser(myUser)
     }

  return (
    <>
    <div className="row">
    <div className='w-75 m-auto'>
    
    {errorMas?<div className='alert alert-danger'>{errorMas}</div>:''}
    {errorList.map((error,index)=><div key={index} className='alert alert-danger'>{error.message}</div>)}
    <div><h1 className='my-2'>Registration Form</h1></div>

      <form onSubmit={submitFormData}>
      <div className='input-gp my-2'>
          <label  htmlFor="first_name" className='my-2'>First Name</label>
          <input onChange={getFormValue} type="text"className=' form-control' name='first_name'/>
        </div>
        <div className='input-gp my-2'>
          <label htmlFor="last_name" className='my-2'>Last Name</label>
          <input onChange={getFormValue}  type="text"className=' form-control' name='last_name'/>
        </div>
        <div className='input-gp my-2'>
          <label htmlFor="age" className='my-2'>age</label>
          <input  onChange={getFormValue} type="number"className=' form-control' name='age'/>
        </div>
        <div className='input-gp my-2'>
          <label htmlFor="email" className='my-2'>Email</label>
          <input onChange={getFormValue} type="email"className=' form-control' name='email'/>
        </div>
        <div className='input-gp my-2'>
          <label htmlFor="password" className='my-2'>Password</label>
          <input onChange={getFormValue}  type="password"className=' form-control' name='password'/>
        </div>
        <button  className='btn btn-info float-end my-2' type='submit'>{loading?<i className='fa fa-spinner fa-spin'></i>:'Registration'}</button>
      <div className="clearfix"></div>
      </form>
    
    </div>
    </div>
    </>
    )
}
