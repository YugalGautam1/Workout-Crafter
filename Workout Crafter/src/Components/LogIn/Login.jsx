import React,{useState, useEffect} from 'react'
import './Login.css'

export const Login = () => {
    const [data,setData] =  useState({username:'',password:''})
    
    const handleSubmit = (e)->{
        e.preventDefault();
        
    }

return (
    <div>
    <div className = "bigName">
        Workout Crafter
    </div>
    <div className = "container">
        <div className = "inside">
        <div className = "head">
        Login
    
        <form method = "POST">
        Username: 
        <label htmlFor = "username"></label>
        <input type = "text" id = "username"></input>
        <br />
        Password:  
        <label htmlFor = "password"></label>
        <input type = "text" id = "password"></input>
        <br/>
        <button type = "submit">Submit</button>
        </form>

        <div className = "signup"><a>Don't have an Account? Sign up!</a></div>
        </div>

    </div>
    </div>        
    </div>
)
}
export default Login;
