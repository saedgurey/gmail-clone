import React from 'react'
import "./Login.css"
import { login } from "./features/userSlice";
import { auth, provider } from "../config/firebase";
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
const Login = () => {
    const dispatch = useDispatch();
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(({ user }) => {
            dispatch(
                login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL,
                })
            );
        });
        
    };
    return (
        <div className='login'>
            <div className="login__Container">
                <img
                    src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"
                    alt="" />

                <Button variant="contained" color="primary" onClick={signIn}>
                    Login
                </Button>
            </div>
        </div>
    )
}

export default Login