import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css'
import Header from './Header';
import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';
import NotFound from './NotFound';


const  App = () => (

 <BrowserRouter>  

    <Header />

        <main>

          <Routes>

              <Route exact path='/Home' Component={Home} />
              <Route exact path='/SignUp' Component={SignUp} />
              <Route exact path='/SignIn' Component={SignIn} />
              <Route Component={NotFound} />
              
          </Routes>


        </main>



  



  </BrowserRouter>

);


export default App;
