import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <Router> 
      <div className="dark">
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/neo">
            <h1>Neo</h1>
          </Route>
          <Route exact path="/space-weather">
          <h1>space-weather</h1>
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
