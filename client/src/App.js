import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import About from './Router/About';
import HomePage from './Router/HomePage';

function App() {
  return (
    <Provider store={store}>
      <Router >
        <div className="App">
          <Switch >
            <Route path='/' exact component={HomePage} />
            <Route path='/about' exact component={About} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
