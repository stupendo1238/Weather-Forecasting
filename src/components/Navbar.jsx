import React from "react"

export default function Navbar(props){
  
  return (
    <>
      <nav className="navbar navbar bg-dark navbar-expand-lg header">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src="weather.png" alt="Bootstrap" width="50" height="43"/>
    </a>
    <strong><a className="navbar-brand text-white" href="#">Weather Forecast</a></strong>
    <button className="navbar-toggler btn1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <form className="d-flex" role="search">
        <input placeholder="Enter location" onChange={props.handle} value={props.value} className="form-control white me-2" type="search" aria-label="Search"/>
        <button id="wow" onClick={props.click}>🔍</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}