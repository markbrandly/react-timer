import {Timer} from "./components/Timer";
import ReactDOM from "react-dom";
import React from 'react';
import '../scss/Reset.scss';
import '../scss/main.scss';

if (typeof window !== 'undefined') {
	ReactDOM.render(<Timer />, document.getElementById('app'))
}