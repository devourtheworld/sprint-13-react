import React, { Component } from 'react';
import { useState } from 'react';
import './App.css';
import {Link, useHistory} from 'react-router-dom';

export default function Main() {
  let history = useHistory();
  function odd(input){
    if (input%2 === 1){
      return ("/subtask3");
    } else {
      return ('/');
    }
  }
  function test(){
    history.push('/subtask4');
  }
  const [input, setInput] = useState('');
  return (
    <div className="App">
      <h1>React Marathon</h1>
      <h2>The topic 'Routes'</h2>
      <Link to={() => odd(input)}>
        Show protected information if
      </Link>
      <span>&nbsp;</span>
      <input value={input} onChange={e => {setInput(e.target.value);}} size="5"></input> is odd
      <div className="mainClass">
        Go to the component programmatically, by checking the box:{" "}
        <input type="checkbox" onClick={test}></input>
      </div>
    </div>
  );
}
