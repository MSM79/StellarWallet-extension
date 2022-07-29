import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Home from './pages/Home';
import Signup from './pages/Signup';

render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </Router>,
  global.document.getElementById('root'),
);
