import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.div`
  @media (max-width: 400px) {
    text-align: center;
  }
`;

export default function Footer() {
  return (
    <FooterStyled>
      <p>&copy; DogStar Beer {new Date().getFullYear()}</p>
    </FooterStyled>
  );
}
