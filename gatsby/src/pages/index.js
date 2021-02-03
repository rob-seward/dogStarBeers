import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import UseLatestData from '../utils/useLatestData';
import LoadingGrid from '../components/LoadingGrid';
import ItemsGrid from '../components/ItemsGrid';

const HomePageStyles = styled.div`
  background-color: var(--red);
  display: grid;
  gap: 1 rem;
  grid-template-columns: repeat(2, minmax(auto, 1fr));
`;

function Beerteam({ beermasters }) {
  console.log(beermasters);
  return (
    <>
      <div>
        <p>content</p>
      </div>
      {!beermasters && <LoadingGrid count={4} />}

      {beermasters && !beermasters.length && (
        <p>No one os working right now!</p>
      )}

      {beermasters?.length && <ItemsGrid items={beermasters} />}
    </>
  );
}

export default function homePage() {
  // destructure out
  const { beermasters } = UseLatestData();

  return (
    <>
      <SEO title="Home" />
      <h1>The Best Beers On The Planet</h1>
      <p>Open everyday from</p>
      <HomePageStyles>
        <Beerteam beermasters={beermasters} />
      </HomePageStyles>
    </>
  );
}
