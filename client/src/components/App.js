import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css'
import Header from './Header';
import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import NotFound from './NotFound';
import AdminRoute from './AdminRoute';
import UserRoute from './AdminRoute';

const  App = () => (

 <BrowserRouter>  

    <Header />

        <main>

          <Routes>

              <Route exact path='/Home' Component={Home} />
              <Route exact path='/SignUp' Component={SignUp} />
              <Route exact path='/SignIn' Component={SignIn} />
              



              {/* protected admin routes */}
              <Route element={<AdminRoute />}>
						  <Route
                exact
                path='/admin/dashboard'
                element={<AdminDashboard />}
						  />
              </Route>

              {/* protected user routes */}
              <Route element={<UserRoute />}>
					  	<Route
						  	exact
						  	path='/user/dashboard'
						  	element={<UserDashboard />}
					  	/>
				    	</Route>

              <Route Component={NotFound} />
              
          </Routes>


        </main>



  



  </BrowserRouter>

);


export default App;
