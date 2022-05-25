import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({loginData ,logout}) {
  return (
    <>
       <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand fs-2 text fw-bolder"to={'home'}>Noxe</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {loginData?<ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">

          <Link className="nav-link active fw-bold" aria-current="page" to={'home'}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active fw-bold"  aria-current="page" to={'movies'}>movies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active fw-bold" aria-current="page" to={'tvshows'}>Tvshows</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active fw-bold" aria-current="page" to={'people'}>People</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active fw-bold" aria-current="page" to={'about'}>About</Link>
        </li>
     
      </ul>:""}
    </div>
    <ul className='d-flex list-unstyled'>
      <div className='soical-link d-flex align-items-center '>
      {loginData?(<h5 className='mx-3 my-0'>{loginData.first_name}</h5>):''}
        <i className='fab fa-facebook fs-5'></i>
        <i className='fab fa-instagram mx-3 fs-5'></i>
        <i className='fab fa-youtube fs-5'></i>

      </div>
    {!loginData?(<>
      <li className="nav-item">
          <Link className="nav-link active fw-bold" aria-current="page" to={'login'}>Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active fw-bold" aria-current="page" to={'registeration'}>Register</Link>
        </li></>):( <li className="nav-item">
          <a className="nav-link active fw-bold pe-auto" aria-current="page"  onClick={logout}>Logout</a>
        </li>)}
      </ul>
  </div>
</nav>
    </>
  )
}
