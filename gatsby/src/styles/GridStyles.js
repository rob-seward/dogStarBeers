import React from 'react';
import styled from 'styled-components';

export const LoadingItemStyled = styled.div`
  background-color: var(--yellow);
  display: grid;
  gap: 1rem;
`;

export const ItemStyled = styled.div`
  background-color: var(--blue);
  text-align: center;
  position: relative;
  img {
    border: 1px solid red;
    height: auto;
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
    background-size: 200px;
    animation: shine 1s infinite linear;
  }
`;
