import React, { Fragment, lazy, Suspense } from 'react';
import Header from './containers/Header';
import Loader from './components/Loader';
import { Route, Switch } from 'react-router-dom'
import './App.css';
const Home = lazy(()=>import('./components/Home')) ;
const Ressource = lazy(()=>import('./components/Ressource'));

const App = () => {
  return (

    <Fragment>
      <Header />
      <Suspense fallback={<Loader/>}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/ressources' component={Ressource} />
      </Switch>
      </Suspense>
    </Fragment>

  );
}

export default App;
