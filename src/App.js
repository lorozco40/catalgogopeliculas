import React from 'react'
import './App.css';
import Pelicula from './Pelicula';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <header>
          <h1 className="heading">Lista de películas</h1>
          <h3>Un simple generador de películas hecho con React y HarperDB</h3>
        </header>
        <div>
          <Pelicula />
        </div>
      </div>
    </div>
  );
}

export default App;