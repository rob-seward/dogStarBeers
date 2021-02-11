import { graphql } from 'gatsby';
import React from 'react';
import FreshBeersList from '../components/FreshBeersList';
import Pagination from '../components/Pagination';
import SEO from '../components/SEO';

export default function freshBeersPage({ data, pageContext }) {
  const allBeers = data.allBeer.nodes;

  return (
    <div className="">
      <SEO title={`Freshbeers Page ${pageContext.currentPage || 1}`} />
      <p className="outLineBox">Gets Beers From an External API</p>
      <p className="blurb">
        This page gets the beers from an external API, loads into graphql and
        paginates depending on how many beers we want on page.
      </p>
      <Pagination
        pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
        totalCount={data.allBeer.totalCount}
        currentPage={pageContext.currentPage || 1}
        skip={pageContext.skip}
        base="/freshbeers"
      />

      <FreshBeersList allBeers={allBeers} />
    </div>
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
