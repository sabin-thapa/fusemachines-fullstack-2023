import React, { useState } from 'react'

const Register = () => {
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const registerUser = async(e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:1337/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        email,
        password
      })
    })

    const data = await response.json()

    console.log(data, "data")
  }

  return (
    <form onSubmit={registerUser} style={{display: "flex", justifyContent: "center"}}>
        <input 
          type="text"
          value={username} 
          onChange={e => setUserName(e.target.value)}
          placeholder='Username'
          />
        <input 
          type="email"
          value={email} 
          onChange={e => setEmail(e.target.value)}
          placeholder='Email'
          />
        <input 
          type="password"
          value={password} 
          onChange={e => setPassword(e.target.value)}
          placeholder='Password'
          />
          <input type='submit' value='Register' />
    </form>

    )
}

export default Register