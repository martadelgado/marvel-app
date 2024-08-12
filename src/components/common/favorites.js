import React from 'react';
import Heart from './heart';
import styled from 'styled-components';

const StyledFavorites = styled.div`
  display: flex;
  align-items: center;
`;

const Favorites = () => {
  return (
    <StyledFavorites>
      <Heart fill="red" stroke="red" />
    </StyledFavorites>
  );
};

export default Favorites;
