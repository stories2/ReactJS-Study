import React, { Component} from 'react'
import './Movie.css'

class Movie extends Component{
    render() {
        return (
            <div>
                <h1>Hello, this is a movie</h1>
                <MoviePoster></MoviePoster>
            </div>
        )
    }
}

class MoviePoster extends Component{
    render() {
        return (
            <img src="https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png"></img>
        )
    }
}

export default Movie