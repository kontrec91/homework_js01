import React, { useState, useEffect } from "react";


// export default () => {

  const LoginForm = ({ onLogin }) => {
    const [login, setLogin] = useState("admin");
    const [password, setPassword] = useState("123");
    // {
    //   console.log({ onLogin });
    //   console.log({ props });
    // }
    return (
      <div class="login">
        <h1>{login}</h1>
        <label htmlFor="login">Login: </label>
        <input
          id="login"
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          style={{ backgroundColor: login.length <= 2 ? "#FAA" : "" }}
        />
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          disabled={login.length < 1 || password.length < 1}
          onClick={() => onLogin(login, password)}
        >
          Submit
        </button>
      </div>
    );
  };
// };
export default LoginForm;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Registration />
//         <LoginForm onLogin={(l, p) => console.log(l, p)} />

//       </header>
//     </div>
//   );
// }

// export default App;
