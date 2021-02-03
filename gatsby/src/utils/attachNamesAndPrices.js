import calcBeerPricing from './calcBeerPricing';
import formatMoney from './formatMoney';

export default function attachNamesAndPrices(order, beers) {
  return order.map((item) => {
    const beer = beers.find((beer) => beer.id === item.id);
    return {
      ...item,
      name: beer.name,
      thumbnail: beer.image.asset.fluid.src,
      price: formatMoney(calcBeerPricing(beer.price, item.size)),
    };
  });
}
