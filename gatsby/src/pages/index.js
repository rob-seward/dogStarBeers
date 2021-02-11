import React from 'react';
import styled from 'styled-components';
import HeroBeerImg1 from '../assets/images/Home_Show_Off.png';
import HeroBeerImg2 from '../assets/images/CTB_Hells_Lager_Home.png';
import HeroBeerImg3 from '../assets/images/OFF_MENU_HOME_420X530.png';
import HeroBeerImg4 from '../assets/images/Nite_week.png';
import SEO from '../components/SEO';
import UseLatestData from '../utils/useLatestData';
import LoadingGrid from '../components/LoadingGrid';
import ItemsGrid from '../components/ItemsGrid';

const HomePageTopStyles = styled.div`
  margin: 1rem;
  padding: 5rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  //grid-column: span 2;
  background-color: var(--red);
  .bestBeer {
    margin-top: 3rem;
    color: var(--black);
    justify-self: center;
  }

  .openTime,
  .blurb {
    text-align: center;
    align-content: center;
    align-self: top;
    font-size: clamp(2rem, 2.5vw, 10rem);
  }
  .blurb {
    margin-top: 4rem;
  }
`;

const HomePageBeersStyles = styled.div`
  --columns: 4;
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  @media (max-width: 500px) {
    --columns: 2;
  }
`;

const HomePageStyles = styled.div`
  .beerMasters {
    text-align: center;
    margin-top: 1rem;
    font-size: 2rem;
    font-size: clamp(2rem, 2.5vw, 10rem);
  }

  display: grid;
  --columns: 1;
  background-color: var(--red);
  margin: 1rem;
  padding: 4rem;
`;

function Beerteam({ beermasters }) {
  return (
    <>
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
      <HomePageTopStyles>
        <p className="openTime">Open Every Day From 370-770px</p>
        <HomePageBeersStyles>
          <img
            className="homePageBeer"
            width="100"
            height="125"
            src={HeroBeerImg2}
            alt="x"
          />
          <img
            className="homePageBeer"
            width="100"
            height="125"
            src={HeroBeerImg1}
            alt="x"
          />
          <img
            className="homePageBeer"
            width="100"
            height="125"
            src={HeroBeerImg3}
            alt="x"
          />
          <img
            className="homePageBeer"
            width="100"
            height="125"
            src={HeroBeerImg4}
            alt="x"
          />
        </HomePageBeersStyles>
        <h1 className="bestBeer outLineBox">
          This Page Updates Direct From Sanity
        </h1>

        <p className="blurb">
          I built this site to become familar with{' '}
          <span className="mark"> React Hooks</span>&nbsp; and practice pulling
          in data into <span className="mark"> Gatsby</span>&nbsp; from
          different sources. For example, this home page was one of the more
          difficult pages to sort. The beerTeam members on this page are not
          loaded at build time, unlike most of the of the other content, when a
          member is added or removed from the{' '}
          <span className="mark"> Sanity head-less CMS</span>
          &nbsp; it will update without waiting for the site to re-build. All
          the other pages are pre-built and either fetched from an{' '}
          <span className="mark"> external API's</span>, directly from{' '}
          <span className="mark"> Graphql</span> or use a{' '}
          <span className="mark"> server-less function</span>.
        </p>
      </HomePageTopStyles>

      <HomePageStyles>
        <p className="outLineBox">Today's Beer Masters</p>
        <p className="blurb beerMasters">
          Prism sartorial aesthetic tumblr vaporware austin. 8-bit DIY
          church-key bespoke farm-to-table. Vaporware taxidermy cloud bread tofu
          tbh. Fingerstache mumblecore tousled vexillologist tattooed shaman,
          banh mi pabst aesthetic chicharrones. Flannel distillery selfies man
          braid adaptogen.
        </p>

        <Beerteam beermasters={beermasters} />
      </HomePageStyles>
    </>
  );
}
