import './App.css';
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchSAData } from '../redux/covid/covid';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSAData());
  }, []);

  return (
    <h1>Insert your capstone project here</h1>
  );
}

export default App;
