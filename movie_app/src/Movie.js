import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Movie.css'
import LinesEllipsis from 'react-lines-ellipsis'

class Movie extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string,
        genres: PropTypes.array.isRequired,
        synopsis: PropTypes.string.isRequired
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
            <MovieStateless title={this.props.title} poster={this.props.poster} genres={this.props.genres} synopsis={this.props.synopsis} />
        )
    }
}

function MovieStateless({ title, poster, genres, synopsis }) {
    return (
        <div className="Movie">
            <div className="Movie__Columns">
                <MoviePosterStateless poster={poster} alt={title}/>
            </div>
            <div className="Movie__Columns">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => {
                        return (
                            <MovieGenreStateless genre={genre} key={index} />
                        )
                    })}
                </div>
                <div className="Movie__Synopsis">
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis=' ...'
                        trimRight
                        basedOn='letters'
                        />
                </div>
            </div>
        </div>
    )
}

function MovieGenreStateless({genre}) {
    return (
        <span className="Movie__Genre">{genre}</span>
    )
}

class MoviePoster extends Component {

    static propTypes = {
        poster: PropTypes.string.isRequired
    }

    render() {
        return (
            <img className="Movie__Poster" src={this.props.poster}></img>
        )
    }
}

function MoviePosterStateless({ poster, alt }) {
    return (
        <img className="Movie__Poster" src={poster} alt={alt} title={alt} />
    )
}

MoviePosterStateless.propTypes = {
    poster: PropTypes.string.isRequired
}

MovieGenreStateless.propTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie