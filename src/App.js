import React from 'react';
import Header from './components/Nav/header/Header';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
    </>
  );
}

export default App;
