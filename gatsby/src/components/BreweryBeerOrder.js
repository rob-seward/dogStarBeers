import React from 'react';
import Img from 'gatsby-image';
import BreweryFormMenuStyles from '../styles/BreweryFormMenuStyles';
import formatMoney from '../utils/formatMoney';
import calcBeerPricing from '../utils/calcBeerPricing';

export default function BreweryBeerOrder({ order, beers, removeFromOrder }) {
  return (
    <>
      <p>You have {order.length} items in your order so far!</p>
      <p>Tomorrow will try to persists users infor from useform</p>

      {order.map((singleOrder, index) => {
        // find the beer
        const beer = beers.find((beer) => beer.id === singleOrder.id);
        return (
          <BreweryFormMenuStyles>
            <Img fluid={beer.image.asset.fluid} alt={beer.name} />
            <p>{formatMoney(calcBeerPricing(beer.price, singleOrder.size))}</p>
            <button
              type="button"
              className="remove"
              onClick={() => removeFromOrder(index)}
            >
              &times;
            </button>
          </BreweryFormMenuStyles>
        );
      })}
    </>
  );
}
