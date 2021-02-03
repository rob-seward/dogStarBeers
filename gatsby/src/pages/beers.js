import { graphql } from 'gatsby';
import React from 'react';
import BeerList from '../components/BeerList';
import SEO from '../components/SEO';

// 2. pop in here via destructuring  data out of props
export default function BeersPage({ data }) {
  const beers = data.beers.nodes;
  return (
    <>
      <SEO title="Beers" />
      <p>This is the beers page and we have {beers.length} beers</p>
      {/* 3. create a component to list the content, pass it all the beers and stick it in here */}
      <BeerList beers={beers} />
    </>
  );
}

// 1. get your data from here
export const query = graphql`
  query BeerQuery {
    beers: allSanityDogbeers {
      nodes {
        name
        id
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 200) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
