import { createGlobalStyle } from 'styled-components';
import bg from '../assets/images/bg.svg';
import stripes from '../assets/images/stripes.svg';

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #E31D1A;
    --black: #000000;
    --yellow: #F4911A;
    --blue: #3D53A0;
    --green: 00AFA3;
    --white: #fff;
    --grey: #808080;  
  }
  html {
    //background-image: url(${bg});
    //background-size: 450px;
    background-attachment: fixed;
    background-size:cover;
    background-color: var(--white);
    font-size: 10px;
  }

  body {
    font-size: 2rem;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    background: var(--red);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--red) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--red) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  hr {
    border: 0;
    height: 8px;
    background-image: url(${stripes});
    background-size: 1500px;
  }

  img {
    max-width: 100%;
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }

  .outLineBox {
    font-size: 4rem;
    text-align: center;
    border: solid 0.125em #000;
    position: relative;
    box-shadow: 0 0.5625em 0 -0.3125em;
    padding: 0.46875em;
    overflow: visible;
    background-color: red;
    margin: 1rem;
  }

  .PageTop {
  margin: 1rem;
  padding: 4rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-column: span 2;
  background-color: var(--red);
  
  .blurb {
    text-align: center;
    align-content: center;
    align-self: top;
    font-size: clamp(2rem, 2.5vw, 10rem);
  }
  .bestBeer {
    margin-top: 3rem;
    color: var(--black);
    justify-self: center;
  }
  .openTime {
    
    justify-self: center;
    align-self: top;
  }


`;

export default GlobalStyles;
