import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import FreshBeersList from '../components/FreshBeersList';
import Pagination from '../components/Pagination';
import SEO from '../components/SEO';

const freshBeersPageStyled = styled.div`
  p.outLineBox {
    background-color: red;
  }
`;

export default function freshBeersPage({ data, pageContext }) {
  const allBeers = data.allBeer.nodes;

  return (
    <freshBeersPageStyled>
      <p className="outLineBox">Gets the beers from an external API</p>

      <div>
        <SEO title={`Freshbeers Page ${pageContext.currentPage || 1}`} />
        <Pagination
          pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
          totalCount={data.allBeer.totalCount}
          currentPage={pageContext.currentPage || 1}
          skip={pageContext.skip}
          base="/freshbeers"
        />
        <FreshBeersList allBeers={allBeers} />
      </div>
    </freshBeersPageStyled>
  );
}

// 1. query data

export const query = graphql`
  query($skip: Int = 0, $pageSize: Int = 12) {
    allBeer(limit: $pageSize, skip: $skip) {
      totalCount
      nodes {
        id
        name
        price
        image
        rating {
          average
          reviews
        }
      }
    }
  }
`;
