import React,{useState, useEffect} from 'react'
import './Login.css'

 const Login = () => {
    const [data,setData] =  useState({username:'',password:''})
    

    const handleChange= (e)=>{
        const{name,value} = e.target
        setData((previousData)=>{
            return{
                ...previousData,
                [name]:value

            }
            
        })
    }
    const handleSubmit = async (e)=>{//Some guy told me this is stupid and I should use formdata Look into that w
        e.preventDefault();
        try{
            const response =  await fetch('http://localhost:5000/login',
            {
                method: 'POST', 
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(data),
            })
            if(response.ok){
                console.log("Works")
            }
            else{
                console.log("WRONG!")
            }
        }
        catch(er){
            console.log(er)

        }        
        
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
    
        <form onSubmit={handleSubmit}>
        Username: 
        <label htmlFor = "username"></label>
        <input type = "text" name = "username" value = {data.username} id = "username" onChange = {handleChange}></input>
        <br />
        Password:  
        <label htmlFor = "password"></label>
        <input type = "text" name = "password" id = "password" value = {data.password} onChange = {handleChange}></input>
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
