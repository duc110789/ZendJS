import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Hello from './component/Hello';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('main-content'));

registerServiceWorker();
