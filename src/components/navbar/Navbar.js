import React from 'react'
import {
  Link
} from "react-router-dom";
import "./Navbar.css"

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand">React Cats And Dogs</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link to="/" class="nav-link">Home</Link>
      </li>
      <li class="nav-item">
        <Link to="/cats" class="nav-link">Cats</Link>
      </li>
      <li className="nav-item">
        <Link to="/dogs" class="nav-link">Dogs</Link>
      </li>
    </ul>
  </div>
</nav>
        </div>
    )
}

export default Navbar
