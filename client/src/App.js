import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navpills from "./components/Navpills";
import Main from "./components/pages/Main";
import Saved from "./components/pages/Saved";
import Search from "./components/pages/Search";


const App = () =>
  <Router>
    <div>
      <Navpills />
      <Route exact path="/" component={Main} />
      <Route exact path="/Search" component={Search} />
      <Route exact path="/Saved" component={Saved} />
    </div>
  </Router>;

export default App;
