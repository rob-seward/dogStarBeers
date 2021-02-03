import styled from 'styled-components';

const BreweryFormMenuStyles = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0 1.3rem;
  align-items: start;
  align-content: center;
  position: relative;
  .gatsby-image-wrapper {
    grid-row: span 2;
    height: 100%;
  }
  p {
    margin: 0;
  }
  button {
    border-color: var(--black);
    font-size: 1.25rem;
    color: var(--black);
    background-color: var(--white);
  }
  button + button {
    margin-top: 0.3rem;
    margin-left: 0.3rem;
  }
  .remove {
    background: none;
    color: var(--red);
    font-size: 3rem;
    position: absolute;
    top: 0;
    right: 0;
    box-shadow: none;
    line-height: 1rem;
  }
`;

export default BreweryFormMenuStyles;
