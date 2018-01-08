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
        <Match exactly pattern="/" component={StorePicker} /> {/* if on homepage show StorePicker component */}
        <Match exactly pattern="/store/:storeId" component={App} /> {/* if on store page show App component */}
        <Miss component={NotFound} /> {/* if url wrong show NotFound component*/}
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main')) // render StorePicker component in #main
