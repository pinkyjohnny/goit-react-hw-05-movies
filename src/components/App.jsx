import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import TrendMovies from '../pages/TrendMovies/TrendMovies';
import NotFound from './NotFound';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import Cast from 'pages/Cast/Cast';
import Reviews from 'pages/Reviews/Reviews';
import Movies from 'pages/Movies/Movies';

export const App = () => {
  return (
    <>
      <div></div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TrendMovies />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
