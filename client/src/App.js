import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Navpills from "./components/Navpills";
import Header from "./components/Header";
import Main from "./components/pages/Main";
import Saved from "./components/pages/Saved";
import Search from "./components/pages/Search";
import Footer from "./components/Footer";

console.log(Header)

const App = () =>
  <Router>
    <div>
      <Navpills />
      <Header />
      <Wrapper>
        <Route exact path="./" component={Main} />
        <Route exact path="./Main" component={Main} />
        <Route exact path="./Search" component={Search} />
        <Route exact path="./Saved" component={Saved} />
      </Wrapper>
      <Footer />
    </div>
  </Router>;

export default App;
