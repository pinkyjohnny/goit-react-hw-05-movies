import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'services/api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [foundMovies, setFoundMovies] = useState();
  const [q, setQ] = useState();
  const location = useLocation();

  const query = searchParams.get('query') || '';

  const handleChangeParams = e => {
    setQ(e.target.value);
  };

  const handleSetQuery = () => {
    setSearchParams(q ? { query: q } : {});
  };

  useEffect(() => {
    fetchMoviesByQuery(query).then(data => setFoundMovies(data));
    setQ('');
  }, [query]);
  console.log(foundMovies);

  return (
    <div>
      <form action="">
        <input
          type="search"
          onChange={handleChangeParams}
          placeholder="Movie name"
        />
        <button onClick={handleSetQuery}>Search</button>
      </form>

      <ul>
        {foundMovies?.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title ?? movie.name ?? movie.original_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
