import { StyledLink } from 'components/NavBar/NavBar';
import React, { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMoviesById } from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const goBackRef = useRef(location.state?.from || '/');

  useEffect(() => {
    fetchMoviesById(movieId).then(data => setMovie(data));
  }, [movieId]);

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <Link to={goBackRef.current}>Go back</Link>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
            : ''
        }
        alt="movie.original_title"
        width="342"
      />
      <h1>{movie.title ?? movie.name ?? movie.original_name}</h1>
      <h3>Rate: {movie.vote_average}/10</h3>
      <h3>Release: {movie.release_date}</h3>
      <h3>Genres: {movie.genres?.map(genre => genre.name).join(', ')}</h3>
      <p>{movie.overview}</p>

      <div>
        <StyledLink to="cast">Cast</StyledLink>
        <StyledLink to="reviews">Reviews</StyledLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
