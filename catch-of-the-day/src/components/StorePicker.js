import React from 'react';
import { getFunName } from '../helpers'; //import "named import"/helper function

class StorePicker extends React.Component {
  render() {
    return (
    <form className="store-selector">
      {/* this is a JSX comment */}
      <h2>Please Enter a Store</h2>
      <input type="text" required placeholder="Store Name" defaultValue={getFunName()} /> {/* apply helper function from named import */}
      <button type="submit">Visit Store -></button>
    </form>
    )
  }
}

export default StorePicker;
