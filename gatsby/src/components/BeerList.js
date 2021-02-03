import { Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from './SEO';

const BeerGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  grid-template-rows: auto 200px;
`;

const BeerStyles = styled.div`
  display: grid;
  @supports not (grid-template-rows: subgrid) {
    grid-template-rows: auto auto 1fr;
  }
  grid-template-rows: subgrid;
  grid-row: span 2;
  grid-gap: 1rem;
  h2,
  P {
    margin: 0;
  }
`;

// 5. create a single beer component to render individual beer
function SingleBeer({ beer }) {
  return (
    <>
      <BeerStyles>
        <Link to={`${beer.slug.current}`}>
          <h2>
            <span className="linkline">{beer.name}</span>
          </h2>
        </Link>
        <Img fluid={beer.image.asset.fluid} alt={beer.name} />
      </BeerStyles>
    </>
  );
}

// 4. loop over over all the beers & 6. put singleBeer component in the loop
export default function BeerList({ beers }) {
  return (
    <BeerGridStyles>
      {beers.map((beer) => (
        <SingleBeer key={beer.id} beer={beer} />
      ))}
    </BeerGridStyles>
  );
}
