import React from 'react'
import './header.css'
import Logo from '../assets/logo.png'
const header = () => {
  return (
    <>
        <div className="container-fluid main-container">
        <div>
        <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <img src={Logo} alt="logo" className="logo"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav justify-content-between">
        <li className="nav-item">
          <a className="nav-link  me-5" aria-current="page" href="#">For Providers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-5" href="#">Medicationd</a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-5" href="#">Contact Doctor</a>
        </li>
          <li className="nav-item ">
          <a className="nav-link me-5" href="#">Our Mission</a>
        </li>
             <li className="nav-item">
          <a className="nav-link " href="#">Sign In</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
        </div>


    </>
  )
}

export default header