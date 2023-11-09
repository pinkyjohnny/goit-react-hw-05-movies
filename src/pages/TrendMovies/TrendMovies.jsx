import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { fetchTrendMovies } from 'services/api';
import styled from 'styled-components';

const TrendMovies = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrendMovies().then(data => setTrendMovies(data));
  }, []);
  return (
    <div>
      <StyledTrendlist>
        {trendMovies.map(movie => (
          <li key={movie.id}>
            <StyledMovieLink
              state={{ from: location }}
              to={`/movies/${movie.id}`}
            >
              {movie.title ?? movie.name ?? movie.original_name}
            </StyledMovieLink>
          </li>
        ))}
      </StyledTrendlist>
    </div>
  );
};

export default TrendMovies;

export const StyledTrendlist = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const StyledMovieLink = styled(NavLink)`
  font-weight: 700;
  font-size: 30px;
  color: rgb(141, 40, 172);
`;
