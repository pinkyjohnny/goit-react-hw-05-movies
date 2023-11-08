import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendMovies } from 'services/api';

const TrendMovies = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrendMovies().then(data => setTrendMovies(data));
  }, []);
  return (
    <div>
      <ul>
        {trendMovies.map(movie => (
          <li key={movie.id}>
            <Link state={{ from: location }} to={`/movies/${movie.id}`}>
              {movie.title ?? movie.name ?? movie.original_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendMovies;
