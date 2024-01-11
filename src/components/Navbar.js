import React from 'react'
import { Link, Outlet, link } from "react-router-dom";
import '../../src/index.css'


// import PropTypes from 'prop-types';
 function Navbar(props){
return(
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} p-0 bg-${props.mode} navbar-${props.color} bg-${props.color}`} >
  <div className="container">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto">
      <li className='nav-item'>
    <h4 className="nav-link active">Faisal  <span>Web Designer</span></h4>
        </li>
        <li className='nav-item'>
    <Link className="nav-link active" to="/cache">Cache Cloud</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/about">About us</Link>
        </li>
       {/* <li className='nav-item'>
        <Link className='nav-link active' to='/practise'>practise</Link>
       </li> */}

       <li className='nav-item'>
        <Link className='nav-link active' to='/hooks'>HOOKS</Link>
       </li>

       <li className='nav-item'>
        <Link className='nav-link active' to='/projects'>React Projects</Link>
       </li>
      </ul>
 
 
    </div>
  </div>
  <div  class='form-check form-switch'>
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onClick={props.myBox}/>
</div>
{/* <div className={`bg-${props.myBox}`}>

  <input class='me-2'  type='checkbox' onClick={props.}></input>
  <input class='me-2'  type='checkbox'></input>
  <input class='me-2'  type='checkbox'></input>
</div> */}

  <div  class={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onClick={props.toggleMode}/>
  <label class="form-check-label me-3" for="flexSwitchCheckChecked">{props.myValue}</label>
</div>


</nav>
<Outlet />

    </>
);
}

// Navbar.propTypes = {
  //     name: PropTypes.string,
  //     about: PropTypes.string
  // }
  
  
  export default Navbar; 
  
  