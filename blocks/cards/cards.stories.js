import { FranklinTemplate } from '@dylandepass/franklin-storybook-addon';
import { loadPage } from '../../scripts/scripts.js';
import decorate from './cards.js';
import style from './cards.css';

export const Cards = (args, context) => FranklinTemplate(loadPage, args, context, decorate);

Cards.parameters = {
  path: '/storybook/cards.plain.html',
  selector: '.cards',
  index: 0,
};

Cards.storyName = 'Cards';

/**
 * Default Config
 */
export default {
  title: 'Cards',
  parameters: {
    docs: {
      description: {
        component: 'A block to display cards',
      },
    },
  },
  argTypes: {
    blockClasses: {
      // options: ['light', 'dark'],
      control: { type: 'radio' },
      table: {
        category: 'Block',
      },
    },
  },
};
