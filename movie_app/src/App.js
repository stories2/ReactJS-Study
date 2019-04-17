import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie'

const movies = [
  {
    title: "Matrix",
    poster: "https://upload.wikimedia.org/wikipedia/tr/thumb/3/36/Matrix-film.jpg/220px-Matrix-film.jpg"
  },
  {
    title: "Full Metal Jacket",
    poster: "https://i.pinimg.com/736x/36/1e/cd/361ecdb85a3767f70810cbe2cdaaf1a4.jpg"
  },
  {
    title: "Oldboy",
    poster: "https://images-na.ssl-images-amazon.com/images/I/5177K3F5Y0L._SY445_.jpg"
  },
  {
    title: "Star Wars",
    poster: "https://images-na.ssl-images-amazon.com/images/I/81WjGytz7HL._SY445_.jpg"
  }
]

class App extends Component {

  //Render: componentWillMount -> render -> componentDidMount

  //Update: componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate

  componentWillMount() {
    // Load Data
    console.log("componentWillMount")
  }

  componentDidMount() {
    // After Edit Data
    console.log("componentDidMount")
  }

  render() {
    // Render Data
    console.log("render")
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return (
            <Movie title={movie.title} poster={movie.poster} key={index}/>
          )
        })}
      </div>
    );
  }
}

export default App;
