import React, { useContext, useCallback } from 'react';
import Header from '../../components/common/header';
import { useParams } from 'react-router-dom';
import Comic from '../../components/details/comic';
import styled from 'styled-components';
import Heart from '../../components/common/heart';
import useFetch from '../../hooks/useFetch';
import { AppContext } from '../../context/AppContext';

const StyledComicList = styled.div`
  padding: 48px 0px;
  max-width: 960px;
  margin: 0 auto;

  h1 {
    margin-bottom: 16px;
  }

  @media (max-width: 768px) {
    padding: 24px 16px;
  }
`;

const StyledBanner = styled.div`
  background: #000000;
  border-top: 1px solid #333333;
  color: #ffffff;
  height: 320px;

  img {
    height: 320px;
  }

  @media (max-width: 768px) {
    height: unset;

    img {
      width: 100%;
    }
  }
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
  margin: 0 auto;
  max-width: 960px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const StyledDesc = styled.div`
  @media (max-width: 768px) {
    padding: 10px 20px;
    width: 100%;
  }
`;

const StyledName = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-bottom: 32px;
`;

const Details = () => {
  const { character, setCharacter } = useContext(AppContext);
  const { id } = useParams();
  const characterDetailsMapper = useCallback((results) => {
    const characterObject = results.reduce((acc, result) => {
      acc[result.id] = {
        name: result.name,
        description: result.description,
        img: `${result.thumbnail.path}/standard_fantastic.${result.thumbnail.extension}`,
        comics: result.comics?.items.slice(0, 20),
      };
      return acc;
    }, {});

    return characterObject;
  }, []);

  const url = 'public/characters';
  const query = `&id=${id}`;
  const { loading } = useFetch(
    url,
    characterDetailsMapper,
    setCharacter,
    query
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log('CHAR', character);

  return (
    character && (
      <>
        <Header />
        <StyledBanner>
          <StyledContainer>
            <img src={character[id]?.img} />
            <StyledDesc>
              <StyledName>
                <div>{character[id]?.name}</div>
                <Heart />
              </StyledName>
              <div>{character[id]?.description}</div>
            </StyledDesc>
          </StyledContainer>
        </StyledBanner>
        <StyledComicList>
          <h1>COMICS</h1>
          {!loading && <Comic id={id} />}
        </StyledComicList>
      </>
    )
  );
};

export default Details;
