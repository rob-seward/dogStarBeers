import { MdStore as icon } from 'react-icons/md';
import person from './person';

export default {
  // Computer Name
  name: 'storeSettings',
  // visible title
  title: 'Settings',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Brewery',
      type: 'string',
      description: 'Location of the Brewery',
    },
    {
      title: 'Opening Time',
      name: 'launchAt',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'description',
      title: 'description',
      type: 'text',
      description: 'Tell us a little bit about this brewery',
    },
    {
      name: 'beermaster',
      title: 'Beerteam',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
    },
  ],
};
