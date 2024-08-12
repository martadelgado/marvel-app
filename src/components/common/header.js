import React from 'react';
import styled from 'styled-components';
import Logo from './logo';
import Favorites from './favorites';
import { Link } from 'react-router-dom';

const StyledHeader = styled.div`
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

const Header = () => {
  return (
    <>
      <Link to="/">
        <StyledHeader>
          <Logo />
          <Favorites />
        </StyledHeader>
      </Link>
    </>
  );
};

export default Header;
