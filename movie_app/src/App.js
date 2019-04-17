import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie'

const movieTitles = [
  "Matrix",
  "Full Metal Jacket",
  "Oldboy",
  "Star Wars"
]

const movieImages = [
  "https://upload.wikimedia.org/wikipedia/tr/thumb/3/36/Matrix-film.jpg/220px-Matrix-film.jpg",
  "https://i.pinimg.com/736x/36/1e/cd/361ecdb85a3767f70810cbe2cdaaf1a4.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/5177K3F5Y0L._SY445_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/81WjGytz7HL._SY445_.jpg"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]}/>
        <Movie title={movieTitles[1]} poster={movieImages[1]}/>
        <Movie title={movieTitles[2]} poster={movieImages[2]}/>
        <Movie title={movieTitles[3]} poster={movieImages[3]}/>
      </div>
    );
  }
}

export default App;
