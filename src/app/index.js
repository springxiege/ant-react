import React from "react";
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import Routes from './routes';
import {hashHistory} from 'history';
ReactDOM.render(
    <Router history={hashHistory} routes={Routes} />,
    document.getElementById('app')
);
