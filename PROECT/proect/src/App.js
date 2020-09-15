import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


const Registration = ({ login, password, confirmPassword }) => {
  const [log, setLog] = useState('login')
  const [pass, setPass] = useState('password')
  const [confPass, setConfPass] = useState('Confirm password')

  return (
    <div id='registration'>
      <h2>Registration</h2>
      <label>Login<input type='text' value={log} placeholder='Login'
        style={{ backgroundColor: log.length <= 2 || log.length >= 10 ? '#FAA' : '' }}
        onChange={(e) => setLog(e.target.value)}
      /></label>
      <label style={{ margin: 10 }}>Password<input type='text' placeholder='Password'
        value={pass} style={{ backgroundColor: pass.length <= 2 || pass !== confPass || pass.match(/[0-9]+/gi) ? '#FAA' : '' }}
        onChange={(e) => setPass(e.target.value)}
      /></label>
      <label style={{ margin: 10 }}>Confirm password<input type='text' placeholder='Confirm password'
        value={confPass} style={{ backgroundColor: confPass.length <= 2 || confPass !== pass || confPass.match(/[0-9]+/gi) ? '#FAA' : '' }}
        onChange={(e) => setConfPass(e.target.value)}
      /></label>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Registration />
      </header>
    </div>
  );
}

export default App;
