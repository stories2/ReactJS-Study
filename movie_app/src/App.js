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

    fetch('https://yts.am/api/v2/list_movies.json')
    .then(function(response) {
      return response.json()
    })
    .then(json => {
      this.setState({
        movies: json.data.movies
      })
    }) 
    .catch(function(reason) {
      console.log("err", reason)
    })
  }

  state = {
    greeting: "Hello"
  }

  _renderMovieView = () => {
    const movies = this.state.movies.map((movie, index) => {
      return (
        <Movie title={movie.title} poster={movie.medium_cover_image} key={index}/>
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
