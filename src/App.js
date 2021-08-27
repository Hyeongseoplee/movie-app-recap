import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {
  state = {
    isLoading : true,
    movies : [],
  };

  getMovies = async () => {
    const { data : {data : { movies }}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"); 
    this.setState({movies : movies, isLoading : false});
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <main className="main">
        {isLoading 
          ? <div className="loader">
              <h1 className="loader__text">Loading..</h1>
            </div>
          : <div className="movies">
           {movies.map((movie) => (
              <Movie
                key ={movie.id}
                title = {movie.title}
                year = {movie.year}
                rating = {movie.rating}
                summary = {movie.summary}
                poster = {movie.medium_cover_image}
                genres = {movie.genres}
              />
          ))}
          </div>
        }
      </main>
    )
  }
}

export default App;
