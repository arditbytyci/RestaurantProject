import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css'
import Header from './Header';
import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';

import AdminDashboard from './AdminDashboard';
import NotFound from './NotFound';
import AdminRoute from './AdminRoute';
import UserRoute from './AdminRoute';
import AdminEditProduct from './AdminEditProduct';
import Shop from './Shop';
import Product from './Product';
import Cart from './Cart';
import Shipping from './Shipping';
import Payment from './Payment';
import PlaceOrder from './PlaceOrder';

const App = () => {


    

  return (
 <BrowserRouter >   

    <Header />

        <main>

          <Routes>

              <Route exact path='/Home'  Component={Home} />
              <Route exact path='/SignUp' Component={SignUp} />
              <Route exact path='/SignIn' Component={SignIn} />
              <Route exact path='/Shop' Component={Shop} />
              <Route exact path='/product/:productId' Component={Product} />
              <Route exact path='/Cart' Component={Cart} />
              <Route exact path='/Shipping' Component={Shipping} />
              <Route exact path='/Payment' Component={Payment} />
              <Route exact path='/PlaceOrder' Component={PlaceOrder} />
              


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
							path='/admin/edit/product/:productId'
							element={<AdminEditProduct />}
						/>




				    	</Route>

              <Route Component={NotFound} />
              
          </Routes>


        </main>



  



  </BrowserRouter>
  );
};


export default App;
