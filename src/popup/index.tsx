import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import Home from '../popup/pages/Home';

render(
  // <Routes>
  //   <Route path="/" element={<Home />} />
  // </Routes>
  <Router>
    <Home />
  </Router>,
  global.document.getElementById('root'),
);
