import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/navbar';
import HomePage from './components/home';
import CalcInterface from './components/calculator';
import Quote from './components/quote';

// eslint-disable-next-line
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/calculator" element={<CalcInterface />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
