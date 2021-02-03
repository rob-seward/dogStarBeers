const sizes = {
  x1: 1,
  x6: 6,
  x12: 12,
  x24: 24,
};

export default function calcBeerPricing(cents, size) {
  return cents * sizes[size];
}
