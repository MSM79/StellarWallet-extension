import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

render(
  <Router>
    <p>an</p>
  </Router>,
  global.document.getElementById('root'),
);
