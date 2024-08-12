import React, { useContext, useCallback } from 'react';
import styled from 'styled-components';
import useFetch from '../../hooks/useFetch';
import { AppContext } from '../../context/AppContext';

const StyledComic = styled.div`
  > img {
    height: 270px;
    width: 180px;
  }
`;

const Comic = ({ comic, id }) => {
  const { comicDetail, setComicDetail } = useContext(AppContext);

  const comicListMapper = useCallback((results) => {
    return results.map((result) => ({
      name: result.title,
      img: `${result.thumbnail.path}/portrait_uncanny.${result.thumbnail.extension}`,
    }));
  }, []);

  const url = `public/characters/${id}/comics`;

  const { loading } = useFetch(url, comicListMapper, setComicDetail);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    comicDetail && (
      <StyledComic>
        <img src={comicDetail[0].img} />
        <div>{comicDetail[0].name} </div>
      </StyledComic>
    )
  );
};

export default Comic;
