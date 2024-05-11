import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className = "bigName">
      Workout Crafter
    </div>
    <div className = "container">
      <div className = "inside">
        <div className = "head">
          Login
          
          <form>
          Username: 
          <label for = "username"></label>
          <input type = "text" id = "username"></input>
          <br />
          Password:  
          <label for = "password"></label>
          <input type = "text" id = "password"></input>
        </form>
        </div>

      </div>
    </div>
    </>
  )
}

export default App
