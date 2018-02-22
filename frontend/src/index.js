import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './redux/reducers';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';
import Editor from './views/Editor/Editor';

const ReduxStore = createStore(reducers, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={ ReduxStore } >
    <Router>
      <div className="App">

        <Route exact path="/" component={ Editor } />

      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();
