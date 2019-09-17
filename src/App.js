import React from 'react';
import Header from './components/Nav/header/Header';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import News from './pages/news/News';
import UEFA from './components/Tables/UEFA';
import Result from './pages/results';
import APL from './components/Tables/APL';
import ELC from './components/Tables/ELC';

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/news" component={News}/>
        <Route exact path="/results" component={Result}/>
        <Route exact path="/uefa" component={UEFA}/>
        <Route exact path="/apl" component={APL}/>
        <Route exact path="/elc" component={ELC}/>
      </Switch>
    </>
  );
}

export default App;
