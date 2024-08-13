import React, { useContext, useCallback } from 'react';
import styled from 'styled-components';
import useFetch from '../../hooks/useFetch';
import { AppContext } from '../../context/AppContext';

const StyledComic = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;

  img {
    height: 270px;
    width: 180px;
  }

  div {
    width: 180px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Comic = ({ id }) => {
  const { comicDetails, setComicDetails } = useContext(AppContext);

  const comicListMapper = useCallback((results) => {
    return results.map((result) => ({
      name: result.title,
      img: `${result.thumbnail.path}/portrait_uncanny.${result.thumbnail.extension}`,
    }));
  }, []);

  const url = `public/characters/${id}/comics`;
  const query = '&orderBy=onsaleDate&limit=5';

  const { loading } = useFetch(url, comicListMapper, setComicDetails, query);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    comicDetails && (
      <StyledComic>
        {comicDetails?.map((comicDetail, i) => (
          <div key={i}>
            <img src={comicDetail.img} />
            <div>{comicDetail.name} </div>
          </div>
        ))}
      </StyledComic>
    )
  );
};

export default Comic;
