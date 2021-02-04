import React from 'react';
import styled from 'styled-components';

import { GoStar } from '@react-icons/all-files/go/GoStar';
import stripes from '../assets/images/stripes.svg';

const LogoStyles = styled.div`
  /* This value controls the entire size of the logo*/
  font-size: clamp(1px, 0.4vw, 8px);
  width: 20em;
  height: 20em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin-top: 1rem;
  //--borderSize: 1em;

  //background-size: 150em;

  display: flex;

  .inner {
    margin: var(--borderSize);
    flex: 1;
    background: var(--yellow);
    display: grid;
    grid-template-rows: 20% 1fr;
    align-content: center;
  }
  .est {
    font-size: 1.5em;
    align-self: center;
  }
  h1 {
    display: grid;
    grid-template-rows: 8fr 2fr;
    align-items: center;
    margin: 0;
    grid-row: 2 / span 2;
    grid-gap: 2em;
    transform: translateY(-0.7em);
  }

  .slices {
    font-size: 10em;
    letter-spacing: 0.2em;
    transform: translateY(-0.15em);
    color: var(--white);
    margin-top: 150;
    position: absolute;
    z-index: -2;
  }
  .slicks {
    transform: scale(1.4);
    display: block;
    text-shadow: 0.18em 0.18em 0 rgba(0, 0, 0, 0.2);
    perspective: 100px;
  }
  .letter {
    font-size: 8em;
    color: var(--blue);
    --scale: 0.6;
    --rotate: -10deg;
    --translateX: 0;
    --translateY: 0;
    --rotateX: 1deg;
    transform: scale(var(--scale)) rotate(var(--rotate))
      translateX(var(--translateX)) translateY(var(--translateY))
      rotateX(var(--rotateX));
    display: inline-block;
    line-height: 1.5;
    transition: transform 0.3s;
    &.d {
      --translateX: -0em;
      --translateY: 0.2em;
    }
    &.o {
      --rotate: 2deg;

      --translateX: 0.05em;
      --translateY: -0.05em;
    }
    &.g {
      --translateY: -0.1em;
      --translateX: 0.1em;
    }
  }
`;

export default function Logo() {
  return (
    <LogoStyles className="logo">
      <div className="inner">
        <span className="est">EST 1994</span>
        <h1>
          <span className="slicks">
            <span className="letter d">d</span>
            <span className="letter o">o</span>
            <span className="letter g">g</span>
          </span>
          <span className="slices">
            <GoStar />
          </span>
        </h1>
      </div>
    </LogoStyles>
  );
}
