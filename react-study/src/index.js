import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ROUTER from './router/Index'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ROUTER />, document.getElementById('root'));
registerServiceWorker();
