import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Presentationals/Header';
import TablesCont from './Containers/TablesCont';
import './App.css';

const App = () => (
  <MuiThemeProvider>
    <div>
      <Header />
      <TablesCont />
    </div>
  </MuiThemeProvider>
);

export default App;
