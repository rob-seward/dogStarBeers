import { MdLocalDrink as icon } from 'react-icons/md';
import PriceInput from '../components/PriceInput';

export default {
  name: 'dogbeers',
  title: 'Dog Star Beers',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Beer Name',
      type: 'string',
      description: 'Name of the beer',
    },
    {
      name: 'style',
      title: 'Style',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of beer in cents',
      validation: (Rule) => Rule.min(1000),
      inputComponent: PriceInput,
    },
    {
      name: 'abv',
      title: 'ABV',
      type: 'number',
      description: 'Alochol strength',
    },
    {
      name: 'hops',
      title: 'HOPS',
      type: 'string',
    },
    {
      name: 'malt',
      title: 'MALT',
      type: 'string',
    },
    {
      name: 'ingrediants',
      title: 'INGREDIANTS',
      type: 'string',
    },
    {
      name: 'detail',
      title: 'DETAIL',
      type: 'text',
    },
  ],
};
