import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';

const NavStyles = styled.nav`
  position: top-fixed;
  background: var(--blue);
  margin: 1rem 1rem;
  margin-bottom: -2.5px;

  .logo {
    transform: translateX(20%) translateY(10%) rotate(10deg);
  }
  a {
    color: var(--white);
    text-decoration: none;

    &:hover {
      transform: rotate(180deg);
      color: var(--black);
    }
    &[aria-current='page'] {
      color: var(--yellow);
    }
  }

  ul {
    text-align: center;
    align-items: center;
    list-style: none;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 15% 1fr 1fr 1fr 1fr 10%;
  }

  @media (max-width: 600px) {
    --columns: 4;

    margin-bottom: 2rem;

    padding-bottom: 2rem;
    ul {
      padding-inline-start: 0px;
      align-items: stretch;
      grid-template-rows: auto auto;
      grid-template-columns: repeat(var(--columns), 1fr);
      justify-items: center;
    }

    .logo {
      transform: none;
    }
  }
  @media (max-width: 500px) {
    --columns: 1;
    padding-top: 1rem;
    justify-items: center;
    background-color: var(--blue);
    gap: 1;
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li className="logo-main">
          <Link to="/">
            <Logo className="logo-main" />
          </Link>
        </li>
        <li>
          <Link className="nav-item1" to="/beers">
            BEERS
          </Link>
        </li>
        <li>
          <Link className="nav-item2" to="/freshbeers">
            FRESHBEERS
          </Link>
        </li>
        <li>
          <Link className="nav-item3" to="/brewery">
            BREWERY
          </Link>
        </li>
        <li>
          <Link className="nav-item4" to="/beerteam">
            BEERTEAM
          </Link>
        </li>
      </ul>
    </NavStyles>
  );
}
