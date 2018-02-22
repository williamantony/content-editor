import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './redux/reducers';

import './index.css';
import Editor from './views/Editor/Editor';

const ReduxStore = createStore(reducers, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={ ReduxStore } >
    <div className="App">
      <Editor />
    </div>
  </Provider>,
  document.getElementById('root')
);

// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();
