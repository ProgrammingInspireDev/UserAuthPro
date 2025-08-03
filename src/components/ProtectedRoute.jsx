import React from 'react';
import  isAuthenticated from '../utils/auth.js';
import{ Navigate} from 'react-router-dom';


const ProtectedRoute = ({children}) => {
    console.log("Auth status:", isAuthenticated());

    return isAuthenticated() ? children : <Navigate to="/"/>
}

export default ProtectedRoute;