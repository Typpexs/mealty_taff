import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import TopBar from './Components/TopBar';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import RoutesTest from './Pages/RouterTest';
import Recipe from './Pages/Recipe';

const routing = (
    // <ButtonAppBar/>
    <TopBar/>
)

// const routes = (
//     <RoutesTest/>
// )

// const routing = (
//     <Router>
//         <div>
//             <ul>
                
//             </ul>
//         </div>
//     </Router>
// )

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(routing, document.getElementById('root'));
// ReactDOM.render(<RoutesTest/>, document.getElementById('main'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
