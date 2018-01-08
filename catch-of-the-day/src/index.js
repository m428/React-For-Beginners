import React from 'react'; // load React library in React variable
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';


import './css/style.css'; // import css form style.css

import App from './components/App'
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound'


// Root componet is the router
const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={StorePicker} />
        <Match exactly pattern="/store/:storeId" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main')) // render StorePicker component in #main

// if on store page show App component
// if on homepage show StorePicker componet
// if url wrong show url not found component
