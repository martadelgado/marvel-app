import React, { useState, useContext, useEffect, useCallback } from 'react';
import Card from '../../components/common/card';
import Header from '../../components/common/header';
import Search from '../../components/list/search';
import styled from 'styled-components';
import useFetch from '../../hooks/useFetch';
import { AppContext } from '../../context/AppContext';

const StyledCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 40px;

  @media (max-width: 768px) {
    gap: 10px;
    flex-direction: row;
    flex-wrap: unset;
    justify-content: space-between;
    margin-top: 20px;
  }
`;

const StyledContainer = styled.div`
  padding: 50px 40px;

  @media (max-width: 768px) {
    padding: 20px 16px;
  }
`;

const List = () => {
  const { characters, characterList, setCharacterList } =
    useContext(AppContext);
  const [initialCharacters, setInitialCharacter] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const characterListMapper = useCallback((results) => {
    return results.map((result) => ({
      id: result.id,
      name: result.name,
      img: result.thumbnail,
    }));
  }, []);
  const url = 'public/characters';
  const query = '&limit=2';
  const { loading } = useFetch(
    url,
    characterListMapper,
    setCharacterList,
    query
  );
  const handleInputChange = (value) => {
    setInputValue(value);
  };

  useEffect(() => {
    if (characters) {
      const filteredCharacters = Object.values(characters).filter((item) =>
        item.name.toLowerCase().includes(inputValue.toLowerCase())
      );

      setCharacterList(filteredCharacters);
    }
  }, [characters, inputValue, setCharacterList]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    characterList && (
      <>
        <Header />
        <StyledContainer>
          <Search onChange={handleInputChange} inputValue={inputValue} />
          <div>{characterList.length} RESULTS</div>
          <StyledCardList>
            {characterList.map((character, i) => (
              <Card key={i} character={character} />
            ))}
          </StyledCardList>
        </StyledContainer>
      </>
    )
  );
};

export default List;
