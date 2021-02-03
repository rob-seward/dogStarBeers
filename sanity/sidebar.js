import React from 'react';
import S from '@sanity/desk-tool/structure-builder';

// Buiild custome sidebar

export default function Sidebar() {
  return S.list()
    .title(`DogStarBeers`)
    .items([
      S.listItem()
        .title('Home Page')
        .icon(() => '🐶⭐')
        .child(
          S.editor()
            .schemaType('storeSettings')
            // Make a documet ID so it isn't just random numbers
            .documentId('belair')
        ),
      // add the rest of the sidebar items back and filter out the storesettings
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'storeSettings'
      ),
    ]);
}
