import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext);
    const location = useLocation()
    if(loader){
        return (
        <div className='flex mt-10 justify-center'>
            <div className="w-16 h-16 border-4 m-2 border-dashed rounded-full animate-spin border-orange-400"></div>
            <div className="w-16 h-16 border-4 m-2 border-dashed rounded-full animate-spin border-orange-400"></div>
            <div className="w-16 h-16 border-4 m-2 border-dashed rounded-full animate-spin border-orange-400"></div>
        </div>
        )
    }
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children;

};

export default PrivateRoute;