import React from 'react';
import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { AuthContext } from '../../Context';
import MyButton from '../UI/MyButton';
import classes from './MyNavbar.module.css';


const Navbar = () => {
    const { setIsAuth} = useContext(AuthContext);

    const logout =()=>{
        setIsAuth(false);
        localStorage.removeItem('auth')
    }
    return (
        <div className={classes.navbar}>
            <div style={{width: '10px'}}></div>
            <div className={classes.navbar__links_btn} style={{marginRight: 'auto' }}><MyButton onClick={logout}>Выйти</MyButton></div>
            <div className={classes.navbar__links}><Link to='/login'>Войти</Link></div>
            <div className={classes.navbar__links}><Link to='/about'>о приложении</Link></div>
            <div className={classes.navbar__links}><Link to='/posts'>посты</Link></div>
        </div>
    );
};

export default Navbar;