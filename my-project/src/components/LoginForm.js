import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
//////////////////////////////////
import jwt_decode from "jwt-decode";
// import store from './vuex/store';
import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';
/////////////////////////////////
import "../styles/RegisterForm.css";


// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import createHistory from 'history/createBrowserHistory';



// const history = createHistory()

const getGQL = (url, headers = {}) => (query = "", variables = {}) =>
fetch(url, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...headers,
  },
  body: JSON.stringify({ query, variables }),
}).then((res) => res.json());
let gql = getGQL("/graphql");

//////////////////////////////////////////////////////////////
// const store = createStore(applyMiddleware(thunk)) //вторым параметром идет миддлварь



const LoginForm = ({store, history}) => {
  const [form] = Form.useForm();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");







  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  let p = getGQL('http://player.asmer.fs.a-level.com.ua/graphql')(
    `query Login{
    login(login: "${login}", password: "${password}")
    }`
  ).then((data) => 
    console.log(data)
)




// store.dispatch(actionPending())
// p.then(data => store.dispatch(actionResolved(data)))


/////////////////////////////////////////////////////////////////////////


  return (
    <div className="registerForm">
      {/* <div className="wrapperRegisterForm"> */}
      <div>
        <Form
          name="basic"
          form={form}
          // initialValues={{
          //   remember: true,
          // }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              onChange={(e) => {
                console.log(e.target.value);
                form.setFieldsValue({ username: e.target.value });
              }}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
            />
          </Form.Item>
          {/* 
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              onClick={async () => {
                await getGQL("/graphql")(
                  `query Login{
                  login(login: "${login}", password: "${password}")
                  }`
                ).then((data) => {
                  console.log(data);
                  // console.log(data.data.login);
                  localStorage.authToken = data.data.login;
                  // const originalFetch = fetch;
                  // fetch = (url, params = { headers: {} }) => {
                  //   params.headers.Authorization =
                  //     "Bearer " + localStorage.authToken;
                  //   return originalFetch(url, params);
                  // };
                  // console.log(fetch)
                  console.log(
                    "localStorage.authToken: " + localStorage.authToken
                  );
                  if (!data.errors && login !=="" && password !== "") {
                    history.push("/library");
                    // window.location.assign("http://localhost:3000/library");
                  } else {
                    //   setError(() => true);// если поле не заполнено, то формируем ошибку
                  }
                });
              }
            }
            >
              Submit
            </Button>
            <Link to="/">Registration</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;


// if(type == 'PROMISE') {
//   {
//     status PENDING ||
//           FULFILED ||
//           REJECTED
//   }
// }
// action PENDING = () => (
//   {type: 'promise', status: 'PENDING', payload: 'null', error: 'null'}
// )
// action FULFILED =() => (
//   {type: 'SET_STATUS', status: 'RESOLVED', payload, error: null }
// )
// action REJECTED =() => (
//   {type: 'SET_STATUS', status: 'REJECTED', payload: null, error}
// )


