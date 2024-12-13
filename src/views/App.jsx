import './../styles/App.scss';
import React from 'react';
import AppRouter from './../router';
import Header from './Header';

function App() {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
}


export default App;
