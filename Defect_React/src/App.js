import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import ProjectIndex from "./components/Project/ProjectIndex";
import Header from "./components/Styles/Header";
import SideBar from "./components/Styles/SideBar";

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

class App extends Component {
  render() {
    return (
      <div >

        <Header/>
        <div class="row">
        <div class="col-md-1">
        <SideBar/>
        </div>
        <div class="container col-md-6">
        <ProjectIndex />
        </div>
        </div>
      
      </div>
    );
  }
}
export default App;
