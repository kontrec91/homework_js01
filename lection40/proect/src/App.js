import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const LifeCycle = ({ onDelete }) => {
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        let intervalID = setInterval(() => {
            setCounter(c => c + 1)
        }, 1000)
        console.log(`${intervalID} start`)

        return () => (clearInterval(intervalID), console.log(`${intervalID} bye-bye`))
    }, [])

    return (
        <div>{counter}</div>
    )
}

const LifeStyles = ({ render: Render, defaultValue = "" }) => {
    const [state, setState] = useState({})
    // const [eye, setEye] = useState(false)
    console.log(state)
    return (
        <div>
            {Object.entries(state).map(([key, value]) => <div key={key}>
                <Render value={value} onChange={e => {
                    let value = e;
                    if (e && e.target && ('value' in e.target)) {
                        value = e.target.value
                        if (typeof value === 'string') {
                            // console.log(typeof value)
                            //   console.log(type)  
                        }
                    }
                    setState({ ...state, [key]: value })
                }} />
                <button onClick={() => {
                    let { [key]: ___, ...newState } = state
                    setState(newState)
                }}>x</button>
            </div>)}
            <button onClick={() => setState({ ...state, [Math.random()]: defaultValue })}>+</button>
        </div>
    )
}



const App = () =>
    <div className="App">
        <LifeStyles render={LifeCycle} />
        <LifeStyles render={"input"} />
        <LifeStyles render={(props) => <input type='color' {...props} />} />
    </div>

export default App;
