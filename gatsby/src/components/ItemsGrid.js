import React from 'react';

import { LoadingItemStyled, ItemStyled } from '../styles/GridStyles';

export default function ItemGrid({ items }) {
  console.log(items);
  return (
    <LoadingItemStyled>
      {items.map((item) => (
        <ItemStyled>
          <p>
            <span className="">{item.name}</span>
          </p>
          <img alt="imagesurl" src={`${item.image.asset.url}`} />
        </ItemStyled>
      ))}
    </LoadingItemStyled>
  );
}
