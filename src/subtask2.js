import React from 'react';
import {BrowserRouter as Router, Route, useRouteMatch, useLocation} from 'react-router-dom';
import './App.css';

export default function Task2() {
    let query = new URLSearchParams(useLocation().search).toString().split("&");
    return(
        <div>
            Subtask2, query parameters: {query.map((param, index, array) => index !== array.length - 1? `${param}, ` : `${param}`)}
        </div>
    )
}