import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { fetchSAData } from '../redux/covid/covid';
import Homepage from '../pages/Homepage';
import Details from '../pages/Details';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSAData());
  }, []);

  return (
    <Switch>
      <Route path="/" exact>
        <Homepage />
      </Route>
      <Route path="/details/:slug" exact>
        <Details />
      </Route>
    </Switch>
  );
}

export default App;
