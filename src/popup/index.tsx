import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Home from './pages/Home';
import Signup from './pages/WalletName';
import Signin from './pages/Signin';
import RestoreWallet from './pages/ImportWallet';
import Nwelcome from './pages/NextWelcome';
import Backup from './pages/Backup';
import Dashboard from './pages/Dashboard';
import './global.css';

render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/restore" element={<RestoreWallet />} />
      <Route path="/backup" element={<Backup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/nwelcome" element={<Nwelcome />} />
    </Routes>
  </Router>,
  global.document.getElementById('root'),
);
