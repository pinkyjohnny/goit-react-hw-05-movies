import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {
  return (
    <StyledHeader>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>
    </StyledHeader>
  );
};

export default NavBar;

const StyledHeader = styled.header`
  display: flex;
  padding: 20px 20px;
  gap: 24px;
  color: rgba(103, 15, 186, 0.715);
  text-weigth: bold;

  border-bottom: 1px solid;
  border-color: rgba(137, 43, 226, 0.715);
  background-color: rgba(189, 145, 231, 0.715);
  box-shadow: 0px 7px 17px -2px rgba(112, 19, 122, 0.75);
  -webkit-box-shadow: 0px 7px 17px -2px rgba(112, 19, 122, 0.75);
  -moz-box-shadow: 0px 7px 17px -2px rgba(112, 19, 122, 0.75);
`;

export const StyledLink = styled(NavLink)`
  align-items: center;
  gap: 10px;
  padding: 5px;
  border-radius: 4px;
  text-decoration: none;
  color: black;

  &.active {
    background-color: rgba(80, 36, 120, 0.715);
    color: white;
  }
  &:hover:not(.active) {
    background-color: rgba(168, 136, 198, 0.715);
  }
`;
