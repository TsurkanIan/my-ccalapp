import React, { useState } from 'react';
import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { AuthContext } from '../../Context';
import MyButton from '../UI/MyButton';
import classes from './MyNavbar.module.css';


const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    let isAuthVisible, isAuthVisibleFalse;
    if(isAuth){
       isAuthVisible = 'visible'
       isAuthVisibleFalse = 'hidden'
    } else {
       isAuthVisible = 'hidden'
       isAuthVisibleFalse = 'visible'
    }
    const logout =()=>{
        setIsAuth(false);
        localStorage.removeItem('auth')
    }
    return (
        <div className={classes.navbar}>
            <div style={{width: '10px'}}></div>
            <div className={classes.navbar__links} style={{marginRight: 'auto', visibility: isAuthVisible }}><Link onClick={logout}>exit</Link></div>
            <div className={classes.navbar__links} style={{visibility: isAuthVisibleFalse}}><Link to='/login'>log in</Link></div>
            <div className={classes.navbar__links}><Link to='/about'>about application</Link></div>
            <div className={classes.navbar__links} style={{visibility: isAuthVisible}}><Link to='/posts'>posts</Link></div>
        </div>
    );
};

export default Navbar;