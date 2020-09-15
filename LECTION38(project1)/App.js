import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const Header = (props) =>
<header>
    {console.log(props)}
  {console.log(props)}
    <img src={logo} className="App-logo" alt="logo" />
    <p>
    {props.children}
    </p>
</header>

const MenuItem = ({service: {url, name}}) => 
<li>
    <a href={url}>{name}</a>
</li>

const services = [
    {url: 'https://google.com', name: 'Гугл'},
    {url: 'https://bing.com', name: 'M$'},
    {url: 'https://stackoverflow.com', name: 'спаситель ваш'},
]


const Aside = () =>
<aside>
    <ul>
        {services.map(service =><MenuItem service={service}/>)}
    </ul>
</aside>

const SuperInput = () => {
    const [text, setText] = useState('38')

    console.log(text)
     return (
         <input style={{backgroundColor: text.length <= 2 ? '#FAA' : ''}}
                value={text} 
                onChange={e => setText(e.target.value)}/>)
}

const MyCheckbox = () =>{
    const [state, setState] = useState(false)
    return (
        <div style={{backgroundColor: state ? 'green' : 'red' }}
             onClick={() => setState(!state)}>
            ТИПА ЧЕКБОКС
        </div>
    )
}
    

const Main = () =>
<main>
    <h2>контент</h2>
</main>

const Footer = () =>
<footer>
    <h2>подвал</h2>
</footer>

const Sum = ({a,b}) =>
<span>
    {+a + +b}
</span>

Sum.defaultProps = {a: 0, b: 10}

const GreeterItem = ({children}) =>
<li>
    <h3>{children}</h3>
</li>

const Greeter = ({children=["SuperMan", "BatMan", "AlcoMan", "Proctolog-Reactolog"]}) =>
<ul>
    {children.map(name => <GreeterItem>{name}</GreeterItem>)}
</ul>

const App = () =>
<div className="App">
    <SuperInput />
    <MyCheckbox />
    <MyCheckbox />
    <Header style={{backgroundColor: 'red'}} 
            shoto>
    {["привет", <br/>, " текст"]}
    </Header>
    <Greeter />
    <Header children='непарный чилдрен' />
    <Sum a={5} b='10' /><br/>
    <Sum a={50} b='1000' />
    <div>
        <Aside/>
        <Main />
    </div>
    <Footer />
</div>

export default App;
