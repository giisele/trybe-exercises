import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/about" component={About} />
          {/* <Route path="/users" component={Users} /> */}
          {/* <Route path="/users" render={(props) => <Users {...props} greetingsMessage={"Good Morning"} />} /> */}
          <Route path="/users/:id" component={Users} />
          <Route path="/strict-access" component={StrictAccess} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
