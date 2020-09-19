import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Registration from "./components/App.js";
import LoginForm from "./components/App.js";
// import {Router, Route, Link} from 'react-router-dom';
// import createHistory from "history/createBrowserHistory";

// const Registration = ({ login, password, confirmPassword }) => {
//   const [log, setLog] = useState("login");
//   const [pass, setPass] = useState("password");
//   const [confPass, setConfPass] = useState("Confirm password");

//   return (
//     <div id="registration">
//       <h2>Registration</h2>
//       <label>
//         Login
//         <input
//           type="text"
//           value={log}
//           placeholder="Login"
//           style={{
//             backgroundColor: log.length <= 2 || log.length >= 10 ? "#FAA" : "",
//           }}
//           onChange={(e) => setLog(e.target.value)}
//         />
//       </label>
//       <label style={{ margin: 10 }}>
//         Password
//         <input
//           type="text"
//           placeholder="Password"
//           value={pass}
//           style={{
//             backgroundColor:
//               pass.length <= 2 || pass !== confPass || pass.match(/[0-9]+/gi)
//                 ? "#FAA"
//                 : "",
//           }}
//           onChange={(e) => setPass(e.target.value)}
//         />
//       </label>
//       <label style={{ margin: 10 }}>
//         Confirm password
//         <input
//           type="text"
//           placeholder="Confirm password"
//           value={confPass}
//           style={{
//             backgroundColor:
//               confPass.length <= 2 ||
//               confPass !== pass ||
//               confPass.match(/[0-9]+/gi)
//                 ? "#FAA"
//                 : "",
//           }}
//           onChange={(e) => setConfPass(e.target.value)}
//         />
//       </label>
//     </div>
//   );
// };

// const getGQL = (url, headers = {}) => (query = "", variables = {}) =>
//   fetch(url, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       ...headers,
//     },
//     body: JSON.stringify({ query, variables }),
//   }).then((res) => res.json());

// const CategoryItem = ({ category: { _id, name } }) => (
//   <li>
//     <a href={`/category/${_id}`}>{name}</a>
//   </li>
// );

// const Aside = () => {
//   const [categories, setCategories] = useState([]);
//   console.log(categories);
//   useEffect(async () => {
//     let data = await getGQL(
//       "http://shop-roles.asmer.fs.a-level.com.ua/graphql"
//     )(`query MainCategories{
//                   CategoryFind(query: "[{\\"parent\\":null}]"){
//                     _id name 
//                   }
//                 }`);
//     setCategories(data.data.CategoryFind);
//   }, []);

//   return (
//     <aside>
//       <ul>
//         {categories.map((category) => (
//           <CategoryItem category={category} />
//         ))}
//       </ul>
//     </aside>
//   );
// };
// class ChatPage extends Component {
//   render() {
//     console.log(this.props)
//     return (
//         <div className="App">
//             {this.props.match.params.param1} <br/>
//             {this.props.match.params.param2}
//         </div>
//     )
//   }
// }


// const History = createHistory(){
//  return(
//   {console.log("start")}
//  ) 
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Registration />
        <LoginForm onLogin={(l, p) => console.log(l, p)} />
      </header>
      {/* <Aside/> */}
      {/* <Router history = {createHistory()}>
    <div>
        <Route path="/chat/:param1/:param2" component = { ChatPage } />
        <Route path="/" component = { MainPage } exact />
    </div> */}
{/* </Router> */}
    </div>
  );
}

export default App;

// const App 

// export default () => 
// <Router history = {createHistory()}>
//   <App/>
// </Router>


