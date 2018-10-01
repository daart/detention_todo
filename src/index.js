import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import './index.css';
import { App } from './components/App';

import registerServiceWorker from './registerServiceWorker';
import { store } from './stores';

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
 document.getElementById('root'));
registerServiceWorker();
