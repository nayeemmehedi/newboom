import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "../components/Home"
import Contract from '../components/Contract'
import Material from "../components2/MaterialUi"


export default function App() {
  return (
    <Router>
       
       <Material>
      
      
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contract">
            <Contract />
          </Route>
         
        </Switch>

        </Material>
     
    </Router>
  );
}
