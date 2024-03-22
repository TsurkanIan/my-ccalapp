import React, { useContext, useState } from 'react';
import MyButton from '../components/UI/MyButton';
import MyInput from '../components/UI/MyInput';
import { AuthContext } from '../Context';

const Login = () => {
    const [auth, setAuth] = useState({login: '', password: ''});
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const Authorisation = (e) => {
        e.preventDefault();
        if( auth.login === 'test' &&  auth.password === '4444'){
            console.log('authorisation succesfull');
            setIsAuth(true);
            localStorage.setItem('auth', 'true')
        } else {
            alert('Incorrect login or password');
        }
        
    }
    return (
        <div style={{margin: '100px 0 0 0'}}>
             <h1>Page for login (login - test, pass - 4444)</h1>
             <form>
                <MyInput 
                    value = {auth.login}
                    onChange ={e => setAuth({...auth, login: e.target.value})}
                    type='text' 
                    placeholder='login'
                />
                <MyInput 
                    value = {auth.password}
                    onChange ={e => setAuth({...auth, password: e.target.value})}
                    type='password' 
                    placeholder='password'
                />
                <MyButton onClick={Authorisation}>log in</MyButton>
             </form>
        </div>
    );
};

export default Login;