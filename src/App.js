import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import FrontMovie from './components/FrontMovie/FrontMovie';
import Row from './components/Row/Row';
import requests from './request';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FrontMovie />
      <Row 
        title='New Releases'
        fetchUrl={requests.fetchTrending} 
      />
      <Row 
        title='Netflix Originals'
        fetchUrl={requests.fetchNetflixOriginals} 
      />
      <Row 
        title='Animation'
        fetchUrl={requests.fetchAnimationMovies} 
      />
      <Row 
        title='Comedy'
        fetchUrl={requests.fetchComedyMovies} 
      />
      <Row 
        title='Science Fiction'
        fetchUrl={requests.fetchSciFiMovies} 
      />
      <Row 
        title='Romance'
        fetchUrl={requests.fetchRomanceMovies} 
      />
    </div>
  );
}

export default App;
