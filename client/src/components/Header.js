import React from "react";
import { Link } from "react-router-dom";



const Header = () => {

    const showNavigation = () => (
        
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to=''>Logo</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link active" 
                    to='/Home'>
                      Home
                    </Link>
          </li>
          <li className="nav-item">
             <Link class="nav-link active" aria-current="page" 
                    to='/SignUp'>
                      SignUp
                      </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" 
                    to='/SignIn'>
                      SignIn
                      </Link>
          </li>
        </ul>
        
      </div>
    </nav>
   

     
   );

        //render
    return (
        <header id='header'>
            { showNavigation() }
        </header>
    );

};


export default Header;


/* 
<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to='#'>Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
                <Link className="nav-link" to="#">SignUp</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="#">SignIn</Link>
            </li>
            
            </ul>
            <form className="form-inline my-2 my-lg-0">
            <input clasNames="form-control mr-sm-2" type="search" placeholder="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>

*/



/* 
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" to=''>Logo</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <Link class="nav-link active" 
                to='/Home'>
                  Home
                </Link>
      </li>
      <li class="nav-item">
         <Link class="nav-link active" aria-current="page" 
                to='/SignUp'>
                  SignUp
                  </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link active" 
                to='/SignIn'>
                  SignIn
                  </Link>
      </li>
    </ul>
    
  </div>
</nav>




*/