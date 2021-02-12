import React from 'react';
import styled from 'styled-components';

const FreshBeersListStyled = styled.div`
  display: grid;
  padding: 1rem;
  gap: 4rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  background-color: var(--white);
`;

const FreshSingleBeerStyled = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  gap: 1rem;
  .beerName,
  .beerPrice {
    text-align: center;
    border: solid 0.125em #000;
    position: relative;
    box-shadow: 0 0.5625em 0 -0.3125em;
    padding: 0.46875em;
    overflow: visible;
  }
  .beerRatings {
    margin-top: 1rem;
    text-align: center;
    color: var(--black);
  }
  .beerTitle {
    text-align: center;
  }
  img {
    grid-column: span 2;
    padding-left: 4em;
    margin-top: 2.5rem;
    align-content: center;
    filter: drop-shadow(30px 20px 30px gray);
  }
  p {
    margin: 0;
  }
`;

function FreshSingleBeer({ beer }) {
  let rating;
  let reviews;
  if (beer.rating === null) {
    rating = 5;
  } else {
    rating = Math.ceil(beer.rating.average);
  }

  if (beer.rating === null) {
    reviews = 0;
  } else {
    reviews = beer.rating.reviews;
  }

  return (
    <FreshSingleBeerStyled>
      <p className="beerName">{beer.name}</p>
      <p className="beerPrice">{beer.price}</p>
      <img src={beer.image} alt={beer.name} />
      <p className="beerRatings">{`Ratings ${reviews}`}</p>
      <p className="beerTitle" title={`${rating} out of 5 stars`}>
        {`⭐`.repeat(rating)}
        <span style={{ filter: `grayscale(100%)` }}>
          {`⭐`.repeat(5 - rating)}
        </span>
      </p>
    </FreshSingleBeerStyled>
  );
}

export default function FreshBeersList({ allBeers }) {
  /* console.log(pageContext.currentPage); */
  return (
    <FreshBeersListStyled>
      {allBeers.map((beer) => (
        <FreshSingleBeer keys={beer.id} beer={beer} />
      ))}
    </FreshBeersListStyled>
  );
}

// tomorroe write the singleBeer, style and reder out
