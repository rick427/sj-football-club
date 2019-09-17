import React from 'react';
import Header from './components/Nav/header/Header';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import News from './pages/news/News';
import UEFA from './components/Tables/UEFA';
import Result from './pages/results';
import LIGA from './components/Tables/LIGA';

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/news" component={News}/>
        <Route exact path="/results" component={Result}/>
        <Route exact path="/uefa" component={UEFA}/>
        <Route exact path="/liga" component={LIGA}/>
      </Switch>
    </>
  );
}

export default App;
