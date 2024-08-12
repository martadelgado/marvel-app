import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [characterList, setCharacterList] = useState([]);
  const [character, setCharacter] = useState(null);
  const [comicDetail, setComicDetail] = useState(null);

  return (
    <AppContext.Provider
      value={{
        characters,
        characterList,
        setCharacterList,
        setCharacters,
        character,
        setCharacter,
        comicDetail,
        setComicDetail,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
