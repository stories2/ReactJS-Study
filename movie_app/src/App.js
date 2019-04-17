import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie'

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

    setTimeout(() => {
      // this.state.greeting = "Bye"
      this.setState({
        movies: [
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
          },
          {
            title: "트랜스포머 2007",
            poster: "https://upload.wikimedia.org/wikipedia/ko/thumb/e/e4/%ED%8A%B8%EB%9E%9C%EC%8A%A4%ED%8F%AC%EB%A8%B8_%EC%98%81%ED%99%94.jpg/250px-%ED%8A%B8%EB%9E%9C%EC%8A%A4%ED%8F%AC%EB%A8%B8_%EC%98%81%ED%99%94.jpg"
          }
        ]
      })
    }, 5000)
  }

  state = {
    greeting: "Hello"
  }

  _renderMovieView = () => {
    const movies = this.state.movies.map((movie, index) => {
      return (
        <Movie title={movie.title} poster={movie.poster} key={index}/>
      )
    })

    return movies
  }

  render() {
    // Render Data
    console.log("render")
    return (
      <div className="App">
        {this.state.movies ? this._renderMovieView() : 'Loading'}
      </div>
    );
  }
}

export default App;
