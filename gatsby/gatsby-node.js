import path, { resolve } from 'path';
import fetch from 'isomorphic-fetch';

// Example createPage dynamically - Sanity data is loaded into grapghql, queried by gatsby and loaded into a template component
async function turnBeersIntoPages({ graphql, actions }) {
  // Get a template for this pages
  const beerTemplate = path.resolve('./src/templates/SingleBeer.js');
  // query all the beers
  const { data } = await graphql(`
    query {
      beers: allSanityDogbeers {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  console.log(data);
  // loop over each one and create a page fo that
  data.beers.nodes.forEach((beer) => {
    console.log(beer.slug.current);
    actions.createPage({
      // what is the URL for this new page
      path: `beers/${beer.slug.current}`,
      component: beerTemplate,
      context: {
        rob: 'is cool',
        slug: beer.slug.current,
      },
    });
  });
}

// Example of getting data from API, turning data into nodes in Gatsby graphql

async function fetchBeersAndTurnIntoNodes({
  actions,
  createNodeId,
  createContentDigest,
}) {
  // 1. Fetch a  list of beers
  const res = await fetch('https://api.sampleapis.com/beers/ale');
  const beers = await res.json();
  // 2. Loop over each one
  for (const beer of beers) {
    // create a node for each beer
    const nodeMeta = {
      id: createNodeId(`beer-${beer.name}`),
      parent: null,
      children: [],
      internal: {
        type: 'Beer',
        mediaType: 'application/json',
        contentDigest: createContentDigest(beer),
      },
    };
    // 3. Create a node for that beer
    actions.createNode({
      ...beer,
      ...nodeMeta,
    });
  }
}

export async function sourceNodes(params) {
  // fetch a list of beers and source them into our gatsby API!
  await Promise.all([fetchBeersAndTurnIntoNodes(params)]);
}

export async function turnFreshBeersNodesIntoPages({ graphql, actions }) {
  const { data } = await graphql(`
    query {
      allBeer {
        totalCount
        nodes {
          id
          name
        }
      }
    }
  `);
  // get the number of things on each page from .enf file
  //* **comes in as string so wee need to convert it
  const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
  // calculate the nimber of pages we are going to need

  const pageCount = Math.ceil(data.allBeer.totalCount / pageSize);
  // check we have the 3 variables we need pulling through - totalCount / pageSize / pageCount
  /* console.log(
    `There are ${data.beerNodes.totalCount} with ${pageSize} per page and there are ${pageCount} pages in total`
  ); */
  // Loop from 1 to n and create pages for them
  Array.from({ length: pageCount }).forEach((_, i) => {
    console.log(`creating pages ${i}`);
    const beersPage = path.resolve('src/pages/freshbeers.js');
    actions.createPage({
      path: `freshbeers/${i + 1}`,
      component: beersPage,
      context: {
        // : this data is passed when we create it
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    });
  });
}

export async function createPages(params) {
  // create pages dynamically
  // 1.beers
  await Promise.all([
    turnBeersIntoPages(params),
    turnFreshBeersNodesIntoPages(params),
  ]);

  // 2.teamMemebers
}
