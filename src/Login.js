import React,{useState} from 'react'
import "./Login.css"
import {Link , useHistory} from "react-router-dom";
// import {auth} from "./firebase"

function Login() {
    const history=useHistory();

    const [email , setEmail]=useState('')
    const [password , setPassword]=useState('')

    const login  = event =>{
        event.preventDefault();//
        console.log("Logueado")
        history.push("/")
        //Login logic ..
        // auth.signInWithEmailAndPassword(email , password)
        // .then((auth)=>{
        //     history.push("/")

        // })
        // .catch((e)=>alert(e.message))


    }
    const register  = event =>{
        event.preventDefault();
        console.log("registrado")
        //do the logic regsitr
        // auth.createUserWithEmailAndPassword(email,password)
        // .then((auth)=>{
        //     //create user and logged in
        //     history.push("/")
        // })
        // .catch((e)=> alert(e.message))
        
    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo" src="https://vistapointe.net/images/star-wars-1.jpg" alt=""></img>
            </Link>
            <div className="login__container">
                <h1>Sig in</h1>
                <form>
                <h5>Email</h5>
                <input value={email} onChange={event => setEmail(event.target.value)} type="text"></input>
                <h5>password</h5>
                <input onChange={event => setPassword(event.target.value)}   type="password"></input>
                <button value={password} onClick={login} type="submit" className="login__signInButton">Sign in</button>

                </form>
                <p>by sign in you agree to the conditons tah user policy</p>
                <button onClick={register} className="login__registerButton">Create your Star wars album     account</button>

            </div>
           
        </div>
    )
}

export default Login
