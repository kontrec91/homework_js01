// import React from "react";
import React from "react";
// import React, { useState } from "react";
// import LoginForm from "./components/Reg";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import {Provider, connect}   from 'react-redux';

////////////////////////////////////////////
import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import myReducers from "./components/reducers";
import actionCreators from "./components/actionCreators";

/////////////////////////////////////////////////////////////////////

import "./styles/Reset.css";
import "./styles/App.css";

import RegisterForm from "./components/RegisterForm";
// import AboutPage from "./components/AboutPage";
import  LoginForm from "./components/LoginForm";
import library from "./components/library";


const history = createHistory()
// const Header = () => {
//   return (
//     <div>
//       <ul class = "main-menu">
//         <li>gRomkoPlayer</li>
//         <li>Библиотека</li>
//         <li>Плайлист</li>
//         <li>Вход/Регистрация</li>
//       </ul>
//     </div>
//   );
// }

// const store = createStore(msgStatusReducer, applyMiddleware(thunk)) //вторым параметром идет
const store = createStore(myReducers, applyMiddleware(thunk)) //вторым параметром идет

store.subscribe(() => console.log(store.getState()))

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      {/* <RegisterForm /> */}
      <Router history={history}> 
        <Provider store={store}>
      {console.log(history)}    
            <Route exact path="/" component={RegisterForm} />        
            <Route exact path="/login" component={LoginForm} />     
            <Route exact path="/library" component={library} /> 
          </Provider>     
      </Router>    
    </div>
  );
}

// const App = () => {
//   return (
      // <Router>        
      //  <Route path="/" component={RegisterForm} />        
      //  <Route path="/about" component={AboutPage} />      
      // </Router>    
//   );
// };

export default App;
