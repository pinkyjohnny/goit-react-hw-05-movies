import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import Layout from './Layout/Layout';
import NotFound from './NotFound';

const TrendMovies = lazy(() => import('pages/TrendMovies/TrendMovies'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('pages/Cast/Cast'));
const Reviews = lazy(() => import('pages/Reviews/Reviews'));

// import TrendMovies from '../pages/TrendMovies/TrendMovies';
// import MovieDetails from '../pages/MovieDetails/MovieDetails';
// import Cast from 'pages/Cast/Cast';
// import Reviews from 'pages/Reviews/Reviews';
// import Movies from 'pages/Movies/Movies';

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
