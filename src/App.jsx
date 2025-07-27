import React from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';


const App = () => {

  const location = useLocation();
  const hideNavbarPath = ['/login', '/signup'];
  const knowpath = ['/', '/login', '/signup', '/']
  const shouldShowNavbar = knowpath.includes(location.pathname) && !hideNavbarPath.includes(location.pathname);


  return (
    <>
    {shouldShowNavbar && <Navbar/>}
   <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='*' element={<NotFound/>}/>
   </Routes>
   </>
  )
}


export default App;