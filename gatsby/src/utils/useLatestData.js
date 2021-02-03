import { useEffect, useState } from 'react';

export default function UseLatestData() {
  // setState
  const [beermasters, setBeermasters] = useState();

  const gql = String.raw;
  // query sanity directy for the beermasters
  useEffect(() => {
    // when the component loads go fetch data
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: gql`
          query {
            StoreSettings(id: "belair") {
              name
              description
              beermaster {
                name
                favouriteBeer
                description
                image {
                  asset {
                    url
                  }
                }
              }
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // to do: check for errors
        // set data to state

        setBeermasters(res.data.StoreSettings.beermaster);
        console.log(res.StoreSettings);
      });
  }, []);
  return {
    beermasters,
  };
}
