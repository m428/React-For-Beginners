import React from 'react'; // load React library in React variable
import { render } from 'react-dom';

import './css/style.css'; // import css form style.css

import App from './components/App'
import StorePicker from './components/StorePicker';

render(<App/>, document.querySelector('#main')) // render StorePicker component in #main
