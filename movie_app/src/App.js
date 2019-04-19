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

    this._getMovies()
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies: movies
    })
  }

  _callApi = () => {

    return fetch('https://yts.am/api/v2/list_movies.json')
    .then(function(response) {
      return response.json()
    })
    .then(json => {
      console.log("json", json)
      return json.data.movies
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
        <Movie 
          title={movie.title} 
          poster={movie.medium_cover_image} 
          key={movie.id} 
          genres={movie.genres}
          synopsis={movie.synopsis}
        />
      )
    })

    return movies
  }

  render() {
    // Render Data
    console.log("render")

    const { movies } = this.state

    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovieView() : 'Loading'}
      </div>
    );
  }
}

export default App;
