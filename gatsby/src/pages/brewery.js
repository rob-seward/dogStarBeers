import { graphql } from 'gatsby';
import React from 'react';
// custom hook - starts with use
import Img from 'gatsby-image';
import useForm from '../utils/useForm';
import useOrder from '../utils/useOrder';
import calcBeerPricing from '../utils/calcBeerPricing';
import formatMoney from '../utils/formatMoney';
import BreweryFormStyles from '../styles/BreweryFormStyles';
import BreweryFormMenuStyles from '../styles/BreweryFormMenuStyles';
import BreweryBeerOrder from '../components/BreweryBeerOrder';
import calculateOrderTotal from '../utils/calculateOrderTotal';

export default function breweryPage({ data }) {
  const beers = data.beers.nodes;
  // set variable for state
  // values is an object
  const { values, updateValues } = useForm({
    name: '',
    email: '',
    phone: 0,
    mapleSyrup: '',
  });

  const {
    order,
    addToOrder,
    removeFromOrder,
    error,
    loading,
    message,
    submitOrder,
  } = useOrder({
    beers,
    values,
  });

  if (message) {
    return <p>{message}</p>;
  }

  return (
    <>
      <BreweryFormStyles onSubmit={submitOrder}>
        <fieldset disabled={loading}>
          <legend>users info</legend>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={updateValues}
            />
          </label>

          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={updateValues}
            />
          </label>
          <input
            type="mapleSyrup"
            name="mapleSyrup"
            id="mapleSyrup"
            value={values.mapleSyrup}
            onChange={updateValues}
            className="mapleSyrup"
          />
        </fieldset>
        <fieldset disabled={loading} className="menu">
          <legend>Menu</legend>
          {beers.map((beer) => (
            <BreweryFormMenuStyles key={beer.id}>
              <Img
                width="50"
                height="50"
                fluid={beer.image.asset.fluid}
                alt={beer.name}
              />
              <div>
                <h2>{beer.name}</h2>
              </div>
              <div className="prices">
                {['x1', 'x6', 'x12', 'x24'].map((size) => (
                  <button
                    type="button"
                    key={size}
                    onClick={() =>
                      addToOrder({
                        id: beer.id,
                        name: beer.name,
                        size,
                      })
                    }
                  >
                    {size} {formatMoney(calcBeerPricing(beer.price, size))}
                  </button>
                ))}
              </div>
            </BreweryFormMenuStyles>
          ))}
        </fieldset>
        <fieldset disabled={loading} className="order">
          <legend>Order</legend>
          <BreweryBeerOrder
            beers={beers}
            order={order}
            removeFromOrder={removeFromOrder}
          />
        </fieldset>
        <fieldset disabled={loading}>
          <h3>
            You order total is: {formatMoney(calculateOrderTotal(order, beers))}
          </h3>
          <div>{error ? <p>Error: {error}</p> : ''}</div>
          <button type="submit" disabled={loading}>
            {loading ? 'Placing Order' : 'Order Now'}
          </button>
        </fieldset>
      </BreweryFormStyles>
    </>
  );
}

export const query = graphql`
  query menu {
    beers: allSanityDogbeers {
      nodes {
        name
        id
        price
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 100) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
