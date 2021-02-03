import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';

const NavStyles = styled.nav`
  position: top-fixed;
  background: var(--red);
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
    margin: 0;
    padding: 0.5rem;
    text-align: center;
    align-items: center;
    list-style: none;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 30% 1fr 1fr 1fr 1fr 20%;
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li className="">
          <Link to="/">
            <Logo />
          </Link>
        </li>
        <li>
          <Link to="/beers">BEERS</Link>
        </li>
        <li>
          <Link to="/freshbeers">FRESHBEERS</Link>
        </li>
        <li>
          <Link to="/brewery">BREWERY</Link>
        </li>
        <li>
          <Link to="/beerteam">BEERTEAM</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
