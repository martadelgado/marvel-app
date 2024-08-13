import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heart from './heart';
import { Link } from 'react-router-dom';

const StyledCard = styled(Link)`
  background-color: red;
  text-decoration: none;
  width: min-content;

  > img {
    height: 190px;
    width: 172px;
  }
`;

const Flexbox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;
  color: #ffffff;
  height: 56px;
  padding: 0 12px;
  width: 100%;
`;

const Card = ({ character }) => {
  return (
    <StyledCard to={'/details/' + character.id}>
      <img
        src={
          character.img.path + '/portrait_uncanny.' + character.img.extension
        }
      />
      <Flexbox>
        {character.name}
        <Heart />
      </Flexbox>
    </StyledCard>
  );
};

Card.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    img: PropTypes.shape({
      extension: PropTypes.string,
      path: PropTypes.string,
    }),
  }),
};

export default Card;
