import React, { useState, useEffect } from 'react';
import './App.css';
// import logo from './logo.svg';


// Spoiler
const Spoiler = ({ header = "+", open, children }) => {
  // console.log(header, open, children)
  // { console.log(open) };
  const [state, setState] = useState(open)
  return (
    <div>
      <div onClick={() => setState(!state)}>
        {header}
      </div>
      {/* <div style={{ visibility: !state ? 'hidden' : 'visible' }}> */}
      {state && children}
      {/* </div> */}
    </div>
  )
}

const RangeInput = ({ max, min }) => {
  // console.log({ min });
  // console.log({ max });

  const [Text, setText] = useState('');
  return (
    <div>
      <h2>RangeInput</h2>
      <label>{Text} <input type='text' value={Text}
        style={{ backgroundColor: Text.length <= min || Text.length >= max ? '#FAA' : '' }}
        onChange={(e) => setText(e.target.value)}
      /></label>
    </div>
  );
};


// PasswordConfirm
const PasswordConfirm = ({ min }) => {
  const [Pass, setPass] = useState('123')
  const [confPass, setconfPass] = useState('123')
  const [eye, setEye] = useState(false)
  // { eye? Pass.type='text' : '' }
  return (
    <div>
      <h2>PasswordConfirm</h2>
      <div className="PasswordConfirm">
        <label style={{ margin: 10 }}>Password<input
          type={eye ? 'text' : 'password'}
          value={Pass} style={{ backgroundColor: Pass.length <= min || Pass !== confPass || Pass.match(/[0-9]+/gi) ? '#FAA' : '' }}
          onChange={(e) => setPass(e.target.value)}
        /><button style={{ color: eye ? 'grey' : '' }} onClick={(e) => setEye(!eye)}>&#128065;</button></label>

        <label style={{ margin: 10 }}>Confirm password<input type={eye ? 'text' : 'password'}
          value={confPass} style={{ backgroundColor: confPass.length <= min || confPass !== Pass || confPass.match(/[0-9]+/gi) ? '#FAA' : '' }}
          onChange={(e) => setconfPass(e.target.value)}
        /><button style={{ color: eye ? 'grey' : '' }} onClick={(e) => setEye(!eye)}>&#128065;</button></label>
      </div>
    </div>
  )
}

// const TimerControl = ({sec, children}) => {
//   const [hour, setHour] = useState(0);
//   const [minute, setMin] = useState(0);
//   const [second, setSec] = useState(0);
//   const [timer, setTimer] = useState(false);
//   const [pause, setPause] = useState(false);
//   const [time, setTime] = useState(0);
//   const [stop, setStop] = useState(false);
//   console.log(time);

//   let a = setTimeout(() => setTime(time - 1), 1000);
//   if (time <= 0 || pause === true || stop) {
//       clearTimeout(a);
//   }

//   let test = new Date(+time * 1000);

//   if (timer === true ) {
//       return (
//           <div>
//               <label>
//                   <input type="text"
//                          placeholder='hour'
//                          value={hour}
//                          onChange={(e) => setHour(e.target.value)}
//                   />
//               </label>
//               <label>
//                   <input type="text"
//                          placeholder='minute'
//                          value={minute}
//                          onChange={(e) => setMin(e.target.value)}
//                   />
//               </label>
//               <label>
//                   <input type="text"
//                          placeholder='second'
//                          value={second}
//                          onChange={(e) => setSec(e.target.value)}
//                   />
//               </label>
//               <button onClick={(e) => {
//                   setTimer(!timer)
//                   setStop(true)
//               }
//               }>Stop</button>
//               <div>
//                   <input
//                       type='text'
//                       readOnly
//                       value={+test.getUTCHours() + ':' + +test.getMinutes() + ':' + +test.getSeconds()}/>
//                   <button onClick={
//                       (e) => setPause(!pause)
//                   }>Pause</button>
//               </div>
//           </div>
//       )
//   } else {
//       return (
//           <div>
//               <label>
//                   <input type="text"
//                          placeholder='hour'
//                          value={hour}
//                          onChange={(e) => setHour(e.target.value)}
//                   />
//               </label>
//               <label>
//                   <input type="text"
//                          placeholder='minute'
//                          value={minute}
//                          onChange={(e) => setMin(e.target.value)}
//                   />
//               </label>
//               <label>
//                   <input type="text"
//                          placeholder='second'
//                          value={second}
//                          onChange={(e) => setSec(e.target.value)}
//                   />
//               </label>
//               <button onClick={(e) => {
//                   setTimer(!timer)
//                   setTime((+second) + (+minute*60)+ (+hour*60*60));
//                   setStop(false)
//               }}>Start</button>
//           </div>
//       )
//   }
// };

// const Timer = (props) => {
//   const [time, setTime] = useState(props.sec);
//   const [pause, setPause] = useState(true);

//   let seconds = time % 60;
//   let minutes = Math.floor((time / 60) % 60);
//   let hours = Math.floor(time / 3600);

//   let interval;

//   var t1 = performance.now();
//   let st;

//   useEffect(() => {
//     // let st;
//     interval = setInterval(() => {
//       if (!pause) {
//         var t2 = performance.now();
//         st = t2 - t1;
//         // setTime((t2, t1) => t2 - t1);
//         setTime((time) => time - 1);
//         console.log(t2);
//       }
//     }, props.refresh);
//     return () => clearInterval(interval);
//   }, [pause]);
//   return (
//     <div>
//       <span>
//         Timer: {hours}:{minutes}:{seconds}
//       </span>
//       <button id="pause" onClick={() => setPause(!pause)}>
//         {/* &#10074;&#10074; */}
//         {pause ? "\u25BA" : "\u275A\u275A"}
//       </button>
//     </div>
//   );
// };

// // Timer
// const TimerSec = ({ sec, refs }) => {
//   // console.log({ sec });
//   const [time, setTime] = useState(sec);
//   // const [minute, setMin] = useState(0);
//   // const [hours, setHrs] = useState(0);

//   const [pause, setPause] = useState(false);
//   {

//     let interval;

//     // var t1 = performance.now();
//     // let st;

//     // useEffect(() => {
//     //   // let st;
//     //   interval = setInterval(() => {
//     //     if (!pause) {
//     //       var t2 = performance.now();
//     //       st = t2 - t1;
//     //       // setTime((t2, t1) => t2 - t1);
//     //       setTime((time) => time - 1);
//     //       console.log(t2);
//     //     }
//     //   }, props.refresh);
//     //   return () => clearInterval(interval);
//     // }, [pause]);

//     // minute = time / 3600
//     // minute > 0.5 ? console.log('yes') : console.log('no')
//     // time/3600>=1? 
//     var date = new Date(time * 1000);
//     // let start = performance.now();
//     // let stop;
//     useEffect(() => {
//       intervail = setInterval(() => (pause || time === 0) ? time : setTime(time - 1), refs);
//       stop = performance.now();
//     },

//     // let duration = stop - start

//       // setTimeout(() => (pause || time === 0) ? time : setTime(time - 1), refs);
//       // let duration = performance.now()-start;
//       // console.log(duration)
//   }
//   return (
//     <div>
//       <h2>Timer</h2>
//       <span id='timer'>{date.getUTCHours() + ':' + date.getUTCMinutes() + ':' + date.getUTCSeconds()}</span>
//       {/* <span id='timer'>{hours}:{minute}:{time}</span> */}
//       <button style={{ backgroundColor: pause ? 'green' : '' }}
//         onClick={() => { setPause(!pause); console.log({ pause }) }}> &#9208;
//       </button>
//     </div >
//   )
// };


// const Timer = (props) => {
//   const [time, setTime] = useState(props.sec);
//   console.log("props.sec: ", props.sec);
//   const [pause, setPause] = useState(true);

//   let seconds = time % 60;
//   let minutes = Math.floor((time / 60) % 60);
//   let hours = Math.floor(time / 3600);

//   let interval;

//   useEffect(() => {
//     interval = setInterval(() => {
//       if (!pause) {
//         setTime((time) => time - 1);
//         // console.log("interval: " + interval);
//       }
//     }, props.refresh);
//     return () => clearInterval(interval);
//   }, [pause]);

//   return (
//     <div>
//       <span>
//         Timer: {hours}:{minutes}:{Math.trunc(seconds)}
//       </span>
//       <button id="pause" onClick={() => setPause(!pause)}>
//         {/* &#10074;&#10074; */}
//         {pause ? "\u25BA" : "\u275A\u275A"}
//       </button>
//     </div>
//   );
// };

 // Timer
const TimerSec = ({ sec, refs }) => {
  const [time, setTime] = useState(sec);

  const [pause, setPause] = useState(false);
  {

    var date = new Date(time * 1000);
    let now;
    useEffect(() => {
      // setTimeout(() => (pause || time === 0) ? time : setTime(time - 1), refs);
      setTimeout(() => (pause || time === 0) ? time : setTime(time - 1), refs);
    }, refs)
  }
  return (
    <div>
      <h2>Timer</h2>
     {/* <span> {hours}:{minutes}:{Math.trunc(seconds)} </span> */}
      <span id='timer'>{date.getUTCHours() + ':' + date.getUTCMinutes() + ':' + date.getUTCSeconds()}</span>
      {/* <span id='timer'>{hours}:{minute}:{time}</span> */}
      <button style={{ backgroundColor: pause ? 'green' : '' }}
        onClick={() => { setPause(!pause); console.log({ pause }) }}> &#9208;
      </button>
    </div >
  )
};

// Timer
const TimerControl = ({ sec }) => {
  // console.log({ sec });
  const [time, setTime] = useState(0);
  const [minute, setMin] = useState(0);
  const [hours, setHrs] = useState(0);


  const [pause, setPause] = useState(false);
  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(false);

  {
    var date = new Date(time * 1000);
    // let timeout = setTimeout(() => setTime(time - 1), 1000);
    // if (time <= 0 || pause || stop) {
    //   // if (time <= 0 || pause === true ) {
    //   clearTimeout(timeout);
    // }
    // let timeout = setTimeout(() => (pause || time === 0) ? date.getUTCHours() + ':' 
    // + date.getUTCMinutes() + ':' + date.getUTCSeconds() : setTime(time - 1), 1000);
    // if (time <= 0 || pause || stop) {
    //   // if (time <= 0 || pause === true ) {
    //   clearTimeout(timeout);
    // }

    let timeout = setTimeout(() =>
      (time <= 0 || pause || stop) ? clearTimeout(timeout) : setTime(time - 1), 1000);
    if (start) {
      return (
        <div>
          <h2>Timer</h2>
          <label htmlFor="">Hours : <input type="text" value={hours} onChange={(e) => setHrs(e.target.value)} /></label>
          <label htmlFor="">Minutes : <input type="text" value={minute} onChange={(e) => setMin(e.target.value)} /></label>
          <label htmlFor="">Seconds : <input type="text" value={time} onChange={(e) => setTime(e.target.value)} /></label>
          <span id='timer'>{date.getUTCHours() + ':' + date.getUTCMinutes() + ':' + date.getUTCSeconds()}</span>
          <button
            style={{ backgroundColor: pause ? 'green' : '' }}
            onClick={() => setPause(!pause)}> &#9208;
          </button>
          {/* <button 
          style={{ backgroundColor: stop ? 'orange' : '' }}
            onClick={() => {
              setPause(start);
              setStop(true)
            }}
          > Stop </button> */}

          <button style={{ backgroundColor: stop ? 'orange' : '' }}
            onClick={() => {
              setStart(!start)
              setStop(true)
            }}>Stop</button>
        </div>
      )
    }
    else if (!start) {
      return (
        <div>
          <h2>Timer</h2>
          <label htmlFor="">Hours : <input type="text" value={hours} onChange={(e) => setHrs(e.target.value)} /></label>
          <label htmlFor="">Minutes : <input type="text" value={minute} onChange={(e) => setMin(e.target.value)} /></label>
          <label htmlFor="">Seconds : <input type="text" value={time} onChange={(e) => setTime(e.target.value)} /></label>
          {/* <button 
          style={{ backgroundColor: start ? 'green' : '' }}
            onClick={() => {
              setStart(!start);
              setTime((+time) + (+minute * 60) + (+hours * 60 * 60));
              setStop(false)
            }}> Start
          </button> */}
          <button
            style={{ backgroundColor: start ? 'green' : '' }}
            onClick={() => {
              setStart(!start);
              setTime((+time) + (+minute * 60) + (+hours * 60 * 60));
              setStop(false)
            }}>Start</button>
        </div>
      )
    }
  }
};






// TimerContainer
const SecondsTimer = ({ seconds }) => <h2>{seconds}</h2>


// const TimerContainer = ({ seconds, refresh, render: Render }) => {
//   const [start, setStart] = useState(performance.now())
//   // const [time, setTime] = useState(seconds)
//   const now = performance.now()
//   useEffect(() => {
//     // setInterval(() => (seconds ===0)? seconds : setStart(seconds-1), refresh)
//     // let interval = setInterval(() => (time === 0) ? time : setTime(time - 1), refresh)
//     let interval = setInterval(() => (start === 0) ? Math.random() : setStart(start - 1), refresh)
//     return () => clearInterval(interval)
//   }, [start]);
//   return (<Render seconds={seconds - (now - start)} />)
// }


const TimerContainer = ({ seconds, refresh, render: Render }) => {
  const [start, setStart] = useState(performance.now())
  // const [forget, setForget] = useState() 
  useEffect(() => {
    let interval = setInterval(() => (seconds === 0) ? seconds : setStart(seconds - 1), refresh)
    return () => clearInterval(interval)
  }, [start]);
  const now = performance.now()
  {/* так как омпонет функция, то мы можем функция передать в другой компонент */ }
  return (<Render seconds={seconds - (now - start)} />)
}


function App() {
  return (
    <div className="App">
      <Spoiler header={<h1>Заголовок</h1>} open>
        <h2>Контент 1</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quae
          molestiae recusandae repellendus sequi quod nam? Ullam ipsum enim, iure laboriosam unde
          tempore similique quasi culpa perferendis temporibus perspiciatis! Aut?Esse necessitatibus
          quam labore vero libero assumenda reprehenderit dolore optio dolorem dignissimos quisquam
          magni nisi, aliquam quis, pariatur accusanti
          officiis exercitationem tempora adipisci. Voluptas nam sint, aut aspernatur est non.
        </p>
      </Spoiler>
      <Spoiler>
        <h2>Контент 2</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, minus.
          Atque maxime quam, dolorum enim aspernatur voluptatibus ad amet ex!
          Quo voluptatem ducimus dolorem fugit sequi doloremque nulla dolor
          repellat!Eveniet perferendis suscipit ex quae adipisci quos possimus.
          Repudiandae cumque delectus ex nihil cum voluptatem? Suscipit deleniti
          laborum rem repellendus
          voluptatem soluta inventore odio quaerat, amet, eligendi autem perspiciatis assumenda?
          </p>
      </Spoiler>
      <RangeInput min={2} max={10} />
      <PasswordConfirm min={2} />
      <TimerSec sec={3600} />
      {/* <Timer sec={1800}  /> */}
      <TimerControl sec={3600} />
      <TimerContainer seconds={1800} refresh={1000} render={SecondsTimer} />
      <TimerContainer seconds={1800} refresh={100} render={TimerSec} />
      {/* <TimerContainer seconds={1800} refresh={100} render='input' /> */}
      {/* <Timer sec={1800}/> */}
      {/* <SecondsTimer /> */}
      {/* <Header children='непарный чилдрен' /> */}
      {/* <TimerControl hours minutes seconds /> */}
    </div>
  );
}

export default App;