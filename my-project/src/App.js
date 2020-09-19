// import React from "react";
import RegisterForm from "./components/RegisterForm";
import React, { useState } from "react";
// import Registration from "./components/Reg";
// import LoginForm from  "./components/Reg";

import "./styles/App.css";




const Header = () => {
  return (
    <div>
      <ul class = "main-menu">
        <li>gRomkoPlayer</li>
        <li>Библиотека</li>
        <li>Плайлист</li>
        <li>Вход/Регистрация</li>
      </ul>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <Header/>
      <RegisterForm />
    </div>
  );
}

export default App;
