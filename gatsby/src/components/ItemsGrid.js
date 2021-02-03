import React from 'react';
import { LoadingItemStyled, ItemStyled } from '../styles/GridStyles';

export default function ItemGrid({ items }) {
  console.log(items);
  return (
    <LoadingItemStyled>
      {items.map((item) => (
        <ItemStyled>
          <p>{item.name}</p>
          <img src={`${item.image.asset.url}`} />
        </ItemStyled>
      ))}
    </LoadingItemStyled>
  );
}
