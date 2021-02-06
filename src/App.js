import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Main from "./mainpage"; 
import Task1 from "./subtask1"; 
import Task2 from "./subtask2"; 
import Task3 from "./subtask3"; 
import Task4 from "./subtask4"; 
import './App.css';

export default function App() {
  return (
    <Router>
      <Main/>
      <Switch>
          <Route path="/subtask1/:param" component={Task1}/>
          <Route path="/subtask2" component={Task2}/>
          <Route path="/subtask3" component={Task3}/>
          <Route path="/subtask4" component={Task4}/>
      </Switch>
    </Router>
  );
}