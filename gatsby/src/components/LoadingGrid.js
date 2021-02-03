import React from 'React';
import styled from 'styled-components';
import { LoadingItemStyled, ItemStyled } from '../styles/GridStyles';

export default function LoadingGrid({ count }) {
  return (
    <LoadingItemStyled>
      {Array.from({ length: count }, (_, i) => (
        <ItemStyled>
          <p>loading...</p>
          <img
            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
            alt="images"
            className="loading"
            width="100"
            height="200"
          />
        </ItemStyled>
      ))}
    </LoadingItemStyled>
  );
}
