import React, { useContext } from 'react';
import MyButton from '../components/UI/MyButton';
import MyInput from '../components/UI/MyInput';
import { AuthContext } from '../Context';

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }
    return (
        <div style={{margin: '100px 0 0 0'}}>
             <h1>Страница для логина <br></br>(Это загрушка, просто нажмите войти)</h1>
             <form onSubmit={login}>
                <MyInput type='text' placeholder='Введите логин'/>
                <MyInput type='text' placeholder='Введите пароль'/>
                <MyButton>Войти</MyButton>
             </form>
        </div>
    );
};

export default Login;