import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


// import Auth from './Auth';
const Navbar = () => {

    const signOut=()=>{
      localStorage.removeItem('CognitoIdentityServiceProvider.15tebea328r4iu74dinskqonih.LastAuthUser')
      localStorage.removeItem('CognitoIdentityServiceProvider.15tebea328r4iu74dinskqonih.vinit123.idToken')
      window.location.reload();



      // localStorage.de('CognitoIdentityServiceProvider.15tebea328r4iu74dinskqonih.LastAuthUser')
    }

    const [user,setUser]=useState('');
    useEffect(()=>{
      console.log(1);
      console.log(1);

      console.log(1);

        setUser(localStorage.getItem('CognitoIdentityServiceProvider.15tebea328r4iu74dinskqonih.LastAuthUser'));
    })
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">StudMan</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li className='nav-item'>
        {/* <Auth/> */}

        {
            user ?
            <Link to='/' class="nav-link" onClick={signOut}>
            Signout
        </Link>
        :
        <Link to='/auth' class="nav-link">
        Auth
    </Link>
        }
        </li>
      </ul>
    
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar