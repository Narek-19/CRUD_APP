import React from "react";
import "./App.css";
import {Article} from "./container/Article";
import { Nav } from "./container/Nav";
import {Footer} from "./container/Footer"
export const App = () => {

  return(
    <div className="App">
      <Nav/>
      <Article/>
      <Footer/>
    </div>
  ) 
}


