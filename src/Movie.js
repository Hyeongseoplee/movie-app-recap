import React from 'react';
import PropTypes from 'prop-types';

function Movie ({ title, year, rating, summary, poster, genres}){
    return <section className="movie-container"> 
        <img src={poster} alt={title} name={title}></img>
    <div className="movie-info">
        <h2 className="movie__title">{title}</h2>
        <h4 className="movie__year">{year}</h4>
        <h4 className="movie__rating">{rating} / 10</h4>
        <ul className="movie__genres">
            {genres.map((genre, index) => (
                <li key={index} className="genre">{genre}</li>
            ))}
        </ul>
        <span className="movie__summary">{summary}</span>

    </div>
    </section>
} 

Movie.propTypes = {
    title : PropTypes.string.isRequired,
    year : PropTypes.number.isRequired,
    rating : PropTypes.number.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}


export default Movie;