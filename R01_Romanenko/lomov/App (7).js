import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";

const Spoiler = ({ header = "+", open, children }) => {
  const [state, setState] = useState(open);
  return (
    <>
      <div onClick={() => setState(!state)}>{header}</div>
      {/* <div
        style={{
          visibility: state ? "visible" : "hidden",
        }}
      > */}
      {state && children}
    </>
    // </div>
  );
};

const RangeInput = (props) => {
  const [text, setText] = useState("RangeInput");
  return (
    <div>
      <label htmlFor="range">RangeInput:</label>
      <input
        id="range"
        type="text"
        value={text}
        style={{
          backgroundColor:
            text.length < props.min || text.length > props.max ? "#FAA" : "",
        }}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

const PasswordConfirm = (props) => {
  const [password, setPassword] = useState("Password");
  const [confirmPassword, setConfirnPassword] = useState("PasswordConfirm");
  return (
    <div>
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="text"
        value={password}
        style={{
          backgroundColor:
            password.length < props.min ||
            password !== confirmPassword ||
            password.match(/[0-9]+/gi)
              ? "#FAA"
              : "",
        }}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="confirm">ConfirmPassword:</label>
      <input
        id="confirm"
        type="text"
        value={confirmPassword}
        style={{
          backgroundColor:
            confirmPassword.length < props.min ||
            confirmPassword !== password ||
            confirmPassword.match(/[0-9]+/gi)
              ? "#FAA"
              : "",
        }}
        onChange={(e) => setConfirnPassword(e.target.value)}
      />
    </div>
  );
};

const LifeCycle = ({ onDelete }) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    let intervalID = setInterval(() => {
      setCounter((c) => c + 1);
    }, 1000);

    return () => clearInterval(intervalID);
    // console.log(intervalID + "intervalID bye-bye")
  }, []);
  return (
    <div>
      {counter}
      <button onClick={onDelete}>x</button>
    </div>
  );
};

const LifeStyles = () => {
  const [count, setCount] = useState(1);
  return (
    <>
      {[..." ".repeat(count)].map(() => (
        <LifeCycle onDelete={() => setCount(count - 1)} />
      ))}
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
};

const Timer = (props) => {
  const [time, setTime] = useState(props.sec);
  // console.log("props.sec: ", props.sec);
  const [pause, setPause] = useState(true);

  let seconds = time % 60;
  let minutes = Math.floor((time / 60) % 60);
  let hours = Math.floor(time / 3600);

  let interval;

  useEffect(() => {
    interval = setInterval(() => {
      if (!pause) {
        setTime((time) => time - 1);
        // console.log("interval: " + interval);
      }
    }, props.refresh);
    return () => clearInterval(interval);
  }, [pause]);

  return (
    <div>
      <span>
        Timer: {hours}:{minutes}:{Math.trunc(seconds)}
      </span>
      <button id="pause" onClick={() => setPause(!pause)}>
        {/* &#10074;&#10074; */}
        {pause ? "\u25BA" : "\u275A\u275A"}
      </button>
    </div>
  );
};

// const MyComponents = {
//   Timer: (props) => {
//     const [time, setTime] = useState(props.sec);
//     const [pause, setPause] = useState(false);

//     const [minute, setMinute] = useState(props.min);
//     const [hour, setHour] = useState(props.hours);

//     {
//       if (!pause) {
//         return (
//           <div>
//             <span>
//               Timer: {hour}:{minute}:{time}
//             </span>
//             <button id="pause" onClick={() => setPause(!pause)}>
//               &#9658;
//             </button>
//           </div>
//         );
//       }
//     }

//     {
//       setTimeout(function () {
//         if (minute < 0) {
//           setMinute(59);
//           setHour(hour - 1);
//         }
//         if (time === 0 || time === "00") {
//           setTime(60);
//           setMinute(minute - 1);
//         } else {
//           setTime(time - 1);
//         }
//       }, 1000);
//     }
//     return (
//       <div>
//         <span>
//           Timer: {hour}:{minute}:{time}
//         </span>
//         <button id="pause" onClick={() => setPause(!pause)}>
//           &#10074;&#10074;
//         </button>
//       </div>
//     );
//   },
// };

const TimerControl = (props) => {
  const [state, setState] = useState(false);

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let sum = +hours * 3600 + +minutes * 60 + +seconds;

  {
    if (state) {
      return (
        <div className="timer-control">
          <input id="hour" type="text" placeholder="Enter Hours" />
          <input id="minute" type="text" placeholder="Enter Minutes" />
          <input id="second" type="text" placeholder="Enter Seconds" />
          <button onClick={() => setState(!state)}>Start</button>
          {/* <Timer sec={+seconds} min={+minutes} hours={+hours} /> */}
          {<Timer sec={sum} refresh={props.refresh} />}
        </div>
      );
    }
  }
  return (
    <div className="timer-control">
      <input
        id="hour"
        type="number"
        placeholder="Enter Hours"
        onChange={(e) => setHours(e.target.value)}
      />
      <input
        id="minute"
        type="number"
        placeholder="Enter Minutes"
        onChange={(e) => setMinutes(e.target.value)}
      />
      <input
        id="second"
        type="number"
        placeholder="Enter Seconds"
        onChange={(e) => setSeconds(e.target.value)}
      />
      <button onClick={() => setState(!state)}>Start</button>
    </div>
  );
};

const LCD = (props) => {
  for (let key in props) {
    console.log("props.key in LCD: " + key);
  }
  return (
    <>
      <h2>LCD</h2>
      <div className="digital-clock au-target">
        <div className="clock-time lcd lcd-frame">
          {<Timer sec={props.sec} refresh={props.refresh} />}
          {/* 22<b className="clock-separator-blink">:</b>19
          <b className="clock-separator-blink">:</b>17 */}
        </div>
      </div>
    </>
  );
};

const TimerContainer = ({ seconds, refresh, render: Render }) => {
  const [text, setText] = useState();
  const [t0, setT0] = useState(performance.now());

  // const [forget, setForget] = useState();

  // let interval;

  // useEffect(() => {
  //   interval = setInterval(() => {
  //     // if (!pause) {
  //     setForget((forget) => !forget);
  //     // }
  //   }, refresh);
  //   return () => clearInterval(interval);
  // }, [forget]);

  console.log(text);

  return (
    <>
      <h2>TimerContainer</h2>
      <Render
        sec={seconds - (performance.now() - t0)}
        refresh={refresh}
        value={text}
        onChange={(e) => {
          let value = e;
          if (e && e.target && "value" in e.target) {
            value = e.target.value;
          }
          setText(value);
        }}
      />
    </>
  );
};

const SecondsTimer = ({ sec: seconds }) => <h2>{seconds}</h2>;

const App = () => (
  <div className="App">
    <Spoiler header={<h1>Заголовок</h1>} open>
      Контент 1
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus
        suscipit incidunt officia deleniti, aspernatur unde eius facilis
        tempora. Eligendi voluptatem deleniti quas dolore rerum! Explicabo
        obcaecati minus est? Cumque!
      </p>
    </Spoiler>

    <Spoiler>
      <h2>Контент 2</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        debitis possimus officiis necessitatibus. Illo quibusdam aliquid
        temporibus impedit, aliquam dolor harum eius consequuntur laboriosam
        quam excepturi voluptatibus dolores consequatur sed.
      </p>
    </Spoiler>
    <RangeInput min={2} max={10} />
    <PasswordConfirm min={2} />
    <h2>Timer</h2>
    <TimerControl refresh={100} />
    <TimerContainer seconds={1800} refresh={100} render={Timer} />
    <TimerContainer seconds={1800} refresh={100} render={SecondsTimer} />
    <TimerContainer seconds={1800} refresh={100} render={"input"} />
    <TimerContainer
      seconds={1800}
      refresh={100}
      render={(props) => <input type="color" {...props} />}
    />
    {/* <LifeStyles /> */}
    {/* <Timer sec={60} min={59} hours={23} /> */}
    {/* <Timer TimerControl /> */}
    <TimerContainer seconds={1800} refresh={100} render={LCD} />
    {/* <LCD /> */}
  </div>
);

export default App;
