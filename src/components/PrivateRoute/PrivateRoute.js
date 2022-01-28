import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import initializeAuthentication from '../../firebase/firebase.init';
import useAuth from '../../hooks/useAuth';

initializeAuthentication();

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();

    if (isLoading) {
        return <CircularProgress color="secondary" />
    }
   
    if(user.email)
    {
        return children;
    }
    return <Navigate to="/userlogin" state={{ from: location }} />;

};

export default PrivateRoute;