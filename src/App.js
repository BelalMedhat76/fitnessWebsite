import "./App.css";
import React from "react";
import Home from "./Component/Home/Home";
import Benefit from "./Component/Benefits/Benefit";
import Gallary from "./Component/Gallary/Gallary";
import FollowUS from "./Component/FollowUs/Follow";
import { Train } from "./Component/Trainer/Train";
import ContactUs from "./Component/ContactUS/Contact";

function App() {
  return (
    <div className="App">
      <Home />
      <FollowUS />
      <Benefit />
      <Gallary />
    </div>
  );
}

export default App;
