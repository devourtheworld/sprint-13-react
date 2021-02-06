import React from 'react';
import {BrowserRouter as Router, Route, useRouteMatch} from 'react-router-dom';
import './App.css';

export default function Task1() {
    const match = useRouteMatch('/subtask1/:param')
    const {param} = match.params;
    return (
        <div>
            Subtask1, parameter: {param}
        </div>
    );
}