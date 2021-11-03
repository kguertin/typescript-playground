import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar } from '@mui/material';

import './navbar.css';

function NavBar() {
  return (
    <AppBar position="fixed" sx={{ background: '#' }}>
      <Toolbar></Toolbar>
    </AppBar>
  );
}

export default NavBar;
