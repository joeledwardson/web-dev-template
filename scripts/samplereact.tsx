import * as React from 'react'
import * as ReactDOM from 'react-dom';
import {pi} from 'mathjs';

class App extends React.Component {
  render() {
    return <div>PI: {pi}</div>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
