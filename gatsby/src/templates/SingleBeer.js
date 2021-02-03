import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../components/SEO';

const SingleBeerStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: var(--red);
  gap: 2rem;
  .content {
    display: grid;
    align-content: center;
    padding: 3rem;

    p {
      color: var(--white);
      text-align: center;
    }
    .beerName {
      font-size: 5rem;
      text-transform: uppercase;
      margin-bottom: 10%;
    }
    .beerDetail {
      position: relative;
      top: 5px;
    }
  }
`;

const SingleDetailStyled = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding: 3rem;
  background-color: var(--white);
  grid-column: span 2;
  .feature {
    font-size: 2rem;
    background-color: var(--white);
  }
`;

export default function SingleBeerPage({ data, pageContext }) {
  const { beers } = data;

  return (
    <>
      <SEO title={beers.name} />
      <SingleBeerStyled>
        <Img fluid={beers.image.asset.fluid} alt={beers.name} />
        <div className="content">
          <p className="beerName"> {beers.name}</p>
          <p className="beerDetail">{beers.detail}</p>
        </div>
        <SingleDetailStyled>
          <h2>
            ABV <span className="feature">{`${beers.abv}%`}</span>
          </h2>
          <h2>
            PRICE <span className="feature">{`£${beers.price / 1000}`}</span>
          </h2>

          <h2>
            HOPS <span className="feature">{`${beers.hops}`}</span>
          </h2>
          <h2>
            INGREDIANTS{' '}
            <span className="feature">{`${beers.ingrediants}`}</span>
          </h2>
        </SingleDetailStyled>
      </SingleBeerStyled>
    </>
  );
}

// 1. write a query which takes $slug as variable and finds a match or not
// 2. pull out data for it
// 3. render it out

// 1. this needs to be dynamic by passing the slug from context
// graphql can access context directly and passed in via $slug
export const query = graphql`
  query($slug: String!) {
    beers: sanityDogbeers(slug: { current: { eq: $slug } }) {
      id
      name
      price
      abv
      hops
      malt
      ingrediants
      detail
      image {
        asset {
          fluid(maxWidth: 100) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
// sanityDogbeers
