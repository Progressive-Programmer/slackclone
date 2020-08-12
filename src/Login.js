import React from 'react'
import './Login.css';
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from './StateProvider';
import { actionType } from './reducer';


function Login() {
const [state, dispatch ] = useStateValue(); 

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then( result => {
            console.log(result);
           dispatch({
               type: actionType.SET_USER,
               user: result.user,
           }) 
        })
        .catch(error => {
            alert(error.message)
        })
    }

    return (
        <div className="login">
            <div className="login__container">
                <img  src="https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png" alt="" />
                <h1>Sign in to Coders for Society</h1>
                <p>codersforsociety.slack.com</p>
                <Button onClick={signIn} >Sign in with Google</Button>
            </div>
            
        </div>
    )
}


export default Login;
