import { graphql } from 'gatsby';
import React from 'react';
import TeamList from '../components/TeamList';
import SEO from '../components/SEO';

// 2. destructure props to get data
// 3. render out the {members.length} to make sure its wired-up
// 4. create a new compt. to provide alist
export default function beerTeamPage({ data }) {
  const members = data.members.nodes;

  return (
    <>
      <SEO title="The Beer Team" />

      <TeamList members={members} />
    </>
  );
}

// 1. query graphql to get you data

export const query = graphql`
  query TeamQuery {
    members: allSanityPerson {
      nodes {
        name
        id
        favouriteBeer
        description
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
