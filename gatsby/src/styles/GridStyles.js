import React from 'react';
import styled from 'styled-components';

export const LoadingItemStyled = styled.div`
  background-color: var(--red);
  display: grid;
  margin-top: 1rem;
  padding: 2rem;
`;

export const ItemStyled = styled.div`
  background-color: var(--red);
  text-align: center;
  position: relative;
  margin-top: 0rem;

  img {
    width: auto;
  }
  @keyframes shine {
    from {
      background-position: 200%;
    }
    to {
      background-position: -40%;
    }
  }
  img.loading {
    --shine: white;
    --background: var(--blue);
    background-image: linear-gradient(
      90deg,
      var(--background) 0px,
      var(--shine) 40px,
      var(--background) 80px
    );
    background-size: 100px;
    animation: shine 1s infinite linear;
  }
`;
