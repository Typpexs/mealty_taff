import React from 'react';

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";


import Recipe from "./Recipe";
import App from "../App";

// export default function RoutesTest() {
//     return (
//       <BrowserRouter >
//         <Switch>
//           <Route exact path="/" component={App} />
//           <Route path="/recipe/5df271b67f9c262d506c338d" component={Recipe} />
//         </Switch>
//       </BrowserRouter >
//     );
//   }

class RoutesTest extends React.Component {
  render() {
    return (
      <BrowserRouter >
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/recipe/5df271b67f9c262d506c338d" component={Recipe} />
        </Switch>
      </BrowserRouter >
    )
  }
}

export default RoutesTest;