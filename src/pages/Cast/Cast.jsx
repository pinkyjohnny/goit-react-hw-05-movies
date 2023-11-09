import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastById } from 'services/api';
import styled from 'styled-components';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCastById(movieId).then(data => setCast(data));
  }, [movieId]);
  return (
    <div>
      <StyledList>
        {cast?.map(actor => (
          <li key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                  : ''
              }
              alt={actor.name}
              width="140"
              height="200"
            />
            <h3>{actor.name}</h3>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </StyledList>
    </div>
  );
};

export default Cast;

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;
