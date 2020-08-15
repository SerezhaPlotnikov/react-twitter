import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Routes from "./router";
import Sidebar from "./views/Sidebar";
import Widgets from "./views/Widgets";

function App() {
  return (
    <Router>
      <div className='app'>
        <Sidebar />
        <Routes />
        <Widgets />
      </div>
    </Router>
  );
}

export default App;
