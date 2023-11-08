import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '969d853c55077b4ad76dadf5dc4c9966';

export const fetchTrendMovies = async params => {
    const { data } = await axios.get('trending/all/day', {
        params: {
            api_key: API_KEY,
        }

    });
    return data.results;
};


export const fetchMoviesById = async id => {
    const { data } = await axios.get(`movie/${id}`, {
        params: {
            api_key: API_KEY,
        }

    });
    return data
}

export const fetchCastById = async id => {
    const { data } = await axios.get(`movie/${id}/credits`,
        {
            params: {
                api_key: API_KEY,
            }
        }

    )
    return data.cast
}

export const fetchReviewsById = async id => {
    const { data } = await axios.get(`movie/${id}/reviews`,
        {
            params: {
                api_key: API_KEY,
            }
        }

    )
    return data.results
}

export const fetchMoviesByQuery = async params => {
    const { data } = await axios.get(`search/movie`,
        {
            params: {
                api_key: API_KEY,
                ...params,
            }
        }

    )
    return data.results
}