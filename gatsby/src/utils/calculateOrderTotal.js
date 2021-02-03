import calcBeerPricing from './calcBeerPricing';

export default function calculateOrderTotal(order, beers) {
  // loop over each item in the order
  return order.reduce((runningTotal, singleOrder) => {
    // find the details of singleBeer in beers list
    const beer = beers.find((singleBeer) => singleBeer.id === singleOrder.id);
    return runningTotal + calcBeerPricing(beer.price, singleOrder.size);
  }, 0);
  // calculate the cost
  // add that to the runningTotal
}
