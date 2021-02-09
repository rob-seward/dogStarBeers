import { Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const MemberGridStyled = styled.div`
  display: grid;
  --columns: 3;
  grid-template-columns: repeat(var(--columns), minmax(100px, 1fr));
  gap: 1rem;
  padding-top: 5rem;
`;

const SingleMemberStyled = styled.div`
  h2 {
    background-color: var(--red);
    text-align: center;
    padding: 0.5rem;
    text-decoration: none;
  }
  .memDescription {
    text-align: left;
    padding-top: 1rem;
  }
  .favBeer {
    background-color: var(--yellow);
    padding: 1rem;
    margin: 2rem;
    margin-top: -1rem;
    z-index: 2;
    position: relative;
    transform: rotate(3deg);
    border: solid 2px;
  }
`;

function SingleMember({ member }) {
  return (
    <SingleMemberStyled>
      <Link to={`beerteam/${member.slug}`}>
        <h2>{member.name}</h2>
        <Img fluid={member.image.asset.fluid} alt={member.name} />
      </Link>
      <p className="favBeer">{member.favouriteBeer}</p>
      <p className="memDescription">{member.description}</p>
    </SingleMemberStyled>
  );
}

export default function TeamList({ members }) {
  return (
    <>
      <div className="center">
        <div className="PageTop">
          <p className="outLineBox"> Sanity Headless CMS</p>
          <p>
            The schema's are set up in CMS so we can add and remove team members
            which are pulled in at build time (differnet to the homepage).
          </p>
        </div>

        <MemberGridStyled>
          {members.map((member) => (
            <SingleMember key={member.id} member={member} />
          ))}
        </MemberGridStyled>
      </div>
    </>
  );
}
