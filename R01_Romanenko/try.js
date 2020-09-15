import React, {useState} from 'react';
import './App.css';


const LoginForm = ({onLogin}) => {

    const [login, setLogin] = useState('admin');
    const [password, setPassword] = useState('123');

    return (
        <div>
            <h1>{login}</h1>
            <h1>{password}</h1>
            <div>
                <label>Username <input type="text" value={login} onChange={(e) => setLogin(e.target.value)}/></label>
            </div>
            <div>
                <label>Password <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/></label>
            </div>
            <button disabled={ login.length <= 1 || password.length <= 1} onClick={()=>onLogin(login, password)}>Send</button>
        </div>
    )
}


const Main = () =>
    <LoginForm onLogin={(l,p) => console.log(l,p)}/>;

export default Main;


// Timer &&  TimerControl
const Timer = ({ sec, min, hrs }) => {
  // console.log({ sec })
  const [time, setTime] = useState(sec)
  const [minute, setMin] = useState(min)
  const [hours, setHrs] = useState(hrs)

  const [pause, setPause] = useState(false)
  {

    setTimeout(function () {
      if (minute < 0) {
        setMin(minute);
        setHrs(hours - 1);
      }
      if (time === 0 || time === "00") {
        setTime(time);
        setMin(minute - 1);
      } else {
        setTime(time - 1);
      }
    }, 1000);

  }
  return (
    <div>
      <h2>Timer</h2>
      <span id='timer'>{hours}:{minute}:{time}</span>
      <button style={{ backgroundColor: pause ? 'green' : '' }}
        onClick={() => {
          setPause(!pause);
          console.log({ pause });
        }}> &#9208;
        </button>
    </div >
  )
};