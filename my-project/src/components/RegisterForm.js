import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';

// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import createHistory from 'history/createBrowserHistory';


import "../styles/RegisterForm.css";

// const history = createHistory()


export default ({store, history}) => {
  const [form] = Form.useForm();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const onFinish = (values) => {
    // console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  };

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
          <Form.Item onChange={(e)=> setLogin(e.target.value)}
            label="Username"
            name="username"
            value={login}
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
                // console.log(e.target.value);
                form.setFieldsValue({ username: e.target.value });
              }}
            />
          </Form.Item>

          <Form.Item onChange={(e)=> setPassword(e.target.value)}
            label="Password"
            name="password"
            value={password}
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
          <Form.Item onChange={(e)=> setConfPassword(e.target.value)}
            label="Confirm password"
            name="Confirm password"
            value={confPassword}
            rules={[
              {
                required: true,
                message: "Please input your password!",
                // validator: 
                // value: 
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
            <Button type="primary" htmlType="submit"
            disabled = {password !== confPassword ? true : false}
            onClick={async () => {
              await getGQL("/graphql")(
                `mutation User{
                createUser (login: "${login}", password: "${password}"){
                _id login
                  }
              }`
            //     `mutation registration{
            //         createUser (user:{
            //       login:"${login}", password:"${password}", nick:"${nick}"
            //     }){
            //       _id login nick
            //     }
            //   }`
              ).then((data) => {
                console.log(data);
                if (!data.errors) {
                  history.push("/login");
                  // window.location.assign("http://localhost:3000/login");
                } else {
                //   setError(() => true);// если поле не заполнено, то формируем ошибку
                }
              });
            }
          }
            type="primary"
            >         
              Submit
            </Button>
        <Link to="/login">Sign_in</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
