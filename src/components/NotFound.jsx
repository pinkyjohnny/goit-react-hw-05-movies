import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <div>
      <StyledImg
        src="https://hostiq.ua/wiki/wp-content/uploads/2021/05/03-error-404-not-found-1.png"
        alt="404"
      />
      <StyledError>
        You can go to <Link to="/">Home</Link>
      </StyledError>
    </div>
  );
};

export default NotFound;

const StyledImg = styled.img`
  display: flex;
  width: 1100px;
  height: 500px;
  align-content: center;
  margin-left: auto;
  margin-right: auto;
`;

const StyledError = styled.h2`
  display: flex;
  justify-content: center;
`;
