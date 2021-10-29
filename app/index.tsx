import * as React from 'react'
import * as ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {pi} from 'mathjs';
// const css = require('./styles.css');
import './styles.css';
import './morestyles.scss';

class App extends React.Component {
  doit = () => {
    alert("hello theres!");
  }
  render() {
    return <div>
      <FontAwesomeIcon icon={faCoffee} onClick={() => this.doit()}/>
      <div>{pi}</div>
      <div className="green-background">A green div</div>
      <div className="red-background">A red div</div>
    </div>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
