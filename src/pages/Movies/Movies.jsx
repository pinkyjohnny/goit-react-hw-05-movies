import {
  StyledMovieLink,
  StyledTrendlist,
} from 'pages/TrendMovies/TrendMovies';
import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'services/api';
import styled from 'styled-components';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [foundMovies, setFoundMovies] = useState();
  const [q, setQ] = useState();
  const location = useLocation();

  const query = searchParams.get('query') || '';

  const handleChangeParams = e => {
    setQ(e.target.value);
  };

  const handleSetQuery = e => {
    e.preventDefault();
    setSearchParams(q ? { query: q } : {});
  };

  useEffect(() => {
    fetchMoviesByQuery({ query }).then(data => setFoundMovies(data));
    setQ('');
  }, [query]);
  console.log(foundMovies);

  return (
    <div>
      <StyledForm onSubmit={handleSetQuery}>
        <StyledInput
          type="search"
          onChange={handleChangeParams}
          placeholder="Movie name"
        />
        <StyledButton>Search</StyledButton>
      </StyledForm>

      <StyledTrendlist>
        {foundMovies?.map(movie => (
          <li key={movie.id}>
            <StyledMovieLink
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              {movie.title ?? movie.name ?? movie.original_name}
            </StyledMovieLink>
          </li>
        ))}
      </StyledTrendlist>
    </div>
  );
};

export default Movies;

const StyledInput = styled.input`
  border-radius: 10px;
  padding: 8px 5px;
  width: 300px;
`;

const StyledForm = styled.form`
  display: flex;
  gap: 15px;
`;

const StyledButton = styled.button`
  align-items: center;
  gap: 10px;
  padding: 5px;
  border-radius: 10px;
  border-color: transparent;
  text-decoration: none;
  color: black;
  background-color: rgba(80, 36, 120, 0.715);
  color: white;
  cursor: pointer;

  &.active {
    background-color: rgb(197, 9, 197);
    color: white;
  }
  &:hover:not(.active) {
    background-color: rgb(197, 9, 197);
  }
`;
