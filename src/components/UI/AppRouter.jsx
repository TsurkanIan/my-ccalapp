import React, { useContext } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context';
import { privateRouter, publicRouter } from '../router/router';
import Loader from './Loader/Loader';


const AppRouter = () => {
    const  {isAuth, isLoading} = useContext(AuthContext);
    console.log(isAuth);
    if (isLoading){
        return <Loader/>
    }
    return (
        isAuth
        ? 
        <Routes>
        {privateRouter.map((rout, ind) => {
            return <Route path={rout.path} element={rout.element} key={ind} />;
            })}
            <Route path="/*" element={<Navigate to="/posts" replace />} />
        </Routes>
        : 
        <Routes>
        {publicRouter.map((rout, ind) => {
            return <Route path={rout.path} element={rout.element} key={ind} />;
            })}
            <Route path="/*" element={<Navigate to="/login" replace />} />
        </Routes>
    );
};

export default AppRouter;