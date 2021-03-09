import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    
    
    
    
    return (
      
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">List Items</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Items/Action/1">Action</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Items/Comedy/2">Comdey</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Items/Crime/3">Crime</Link>
      </li>
    </ul>
  </div>
</nav>  
       
    )
}

export default Nav
