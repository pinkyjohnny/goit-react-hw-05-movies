import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMoviesById } from 'services/api';
import styled from 'styled-components';

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
    <Container>
      <StyledButton to={goBackRef.current}>Go back</StyledButton>
      <StyledWrapper>
        <div>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
                : ''
            }
            alt="movie.original_title"
            width="342"
            style={{ marginTop: 12 }}
          />
        </div>
        <StyledSideContainer>
          <StyledTitle>
            {movie.title ?? movie.name ?? movie.original_name}
          </StyledTitle>
          <h3>Rate: {movie.vote_average}/10</h3>
          <h3>Release: {movie.release_date}</h3>
          <h3>Genres: {movie.genres?.map(genre => genre.name).join(', ')}</h3>
          <p>{movie.overview}</p>
          <StyledButton to="cast">Cast</StyledButton>
          <StyledButton to="reviews" style={{ marginLeft: 12 }}>
            Reviews
          </StyledButton>
        </StyledSideContainer>
      </StyledWrapper>
      <div>
        <Outlet />
      </div>
    </Container>
  );
};

export default MovieDetails;

const StyledTitle = styled.h1`
  font-family: fantasy;
`;

const StyledWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

const StyledSideContainer = styled.div`
  margin-left: 100px;
  margin-top: 130px;
`;

const Container = styled.div`
  padding: 0 0;
`;

const StyledButton = styled(NavLink)`
  align-items: center;
  gap: 10px;
  padding: 5px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  background-color: rgba(80, 36, 120, 0.715);
  color: white;

  &.active {
    background-color: rgb(197, 9, 197);
    color: white;
  }
  &:hover:not(.active) {
    background-color: rgb(197, 9, 197);
  }
`;
