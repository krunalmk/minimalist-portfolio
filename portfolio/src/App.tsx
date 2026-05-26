import React from 'react';
import logo from './logo.svg';
import './App.css';
import DrawerAppBar from './app-bar/DrawerAppBar';
import Button from '@mui/material/Button';
import { FormContext } from 'react-aria-components';

function App() {
  return (
    <div className="App">
        <FormContext.Provider value={{}}>
      <Button></Button>
      </FormContext.Provider>
    </div>
  );
}

export default App;
