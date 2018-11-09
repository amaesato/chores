import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { Typography } from '@rmwc/typography';
import { Fab } from '@rmwc/fab';

import Dashboard from './components/Dashboard';
import AddChore from './components/AddChore';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <Typography use="headline3">Chores</Typography>
        </header>
        <div className="body">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/add" component={AddChore} />
          </Switch>
        </div>
        <Link to="/add" className="app-add-icon">
          <Fab icon="add" />
        </Link>
      </div>
    );
  }
}

export default App;
