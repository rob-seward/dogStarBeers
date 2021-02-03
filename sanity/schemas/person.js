import { MdPerson as icon } from 'react-icons/md';
// import { IoBeerOutline as icon } from 'react-icons/io5';

export default {
  name: 'person',
  title: 'Team Members',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
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
      name: 'favouriteBeer',
      title: 'Favourite Beer',
      type: 'string',
    },

    {
      name: 'description',
      title: 'description',
      type: 'text',
      description: 'Tell us a litttle bit abut them',
    },
  ],
};
