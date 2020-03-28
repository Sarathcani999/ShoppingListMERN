import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import About from './Router/About';
// import HomePage from './Router/HomePage';
import Login from './Router/Login';
import SignUp from './Router/SignUp';
import { loadUser, fetchItems } from './redux';
import Dashboard from './Router/Dashboard';

function App() {
  useEffect(() => {
    store.dispatch(loadUser())
    store.dispatch(fetchItems())
  } , [])
  return (
    <Provider store={store}>
      <Router >
        <div className="App">
          <div className="content" >
            <Switch >
              <Route path='/' exact component={Dashboard} />
              <Route path='/about' exact component={About} />
              <Route path='/login' exact component={Login} />
              <Route path='/register' exact component={SignUp} />
            </Switch>
          </div>


          {/* <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">This is a boiler plate Template</p>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="copyright-text">
            <center>
              <p>&copy; Copyright Sarath C Ani</p>
            </center>
          </div>
          </div>
          </div>
        </footer> */}
        </div>
      </Router>
    </Provider>
  );
}


export default App;