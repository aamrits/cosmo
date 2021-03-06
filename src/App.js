import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import { Header, Footer } from './components';
import SearchImages from './pages/SearchImages';
import AsteroidWatch from './pages/AsteroidWatch';
import Apod from './pages/Apod';

function App() {
  return (
    <Router> 
      <div className="dark">
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/asteroid-watch">
            <AsteroidWatch />
          </Route>
          <Route exact path="/space-weather">
            <h1>space-weather</h1>
          </Route>
          <Route exact path="/search-images">
            <SearchImages />
          </Route>
          <Route exact path="/mars-weather">
            <h1>Mars-weather</h1>
          </Route>
          <Route exact path="/astronomy-picture-of-the-day">
            <Apod />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
