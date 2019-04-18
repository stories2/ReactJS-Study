import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Movie.css'

class Movie extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string
    }

    render() {
        console.log(this.props)
        // return (
        //     <div>
        //         <h1>Movie Title: {this.props.title}</h1>
        //         {/* <MoviePoster poster={this.props.poster}></MoviePoster> */}
        //         <MoviePosterStateless poster={this.props.poster}/>
        //     </div>
        // )
        return (
            <MovieStateless title={this.props.title} poster={this.props.poster} />
        )
    }
}

function MovieStateless({ title, poster }) {
    return (
        <div>
            <h1>Movie Title: {title}</h1>
            <MoviePosterStateless poster={poster} />
        </div>
    )
}

class MoviePoster extends Component {

    static propTypes = {
        poster: PropTypes.string.isRequired
    }

    render() {
        return (
            <img src={this.props.poster}></img>
        )
    }
}

function MoviePosterStateless({ poster }) {
    return (
        <img src={poster} alt="Movie Img" />
    )
}

MoviePosterStateless.propTypes = {
    poster: PropTypes.string.isRequired
}

export default Movie