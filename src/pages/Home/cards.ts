import Anhelina from './images/heroes/anhelina_vrubleuskaya.jpg';
import CardImage1 from './images/about/image-1.svg';
import CardImage2 from './images/about/image-2.svg';
import CardImage3 from './images/about/image-3.svg';
import { Cards } from './components/Cards';
import { ComponentProps } from 'react';
import Konstantin from './images/heroes/konstantin_shumak.jpg';
import Olga from './images/heroes/olga_polyanskaya.jpg';
import { Paths } from '../../constants';

export const aboutCards: ComponentProps<typeof Cards>['cards'] = [
  {
    title: 'Join',
    image: CardImage1,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis laoreet tellus.',
    button: { text: 'Lorem Ipsum', path: Paths.home },
  },
  {
    title: 'Communicate',
    image: CardImage2,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis laoreet tellus.',
    button: { text: 'Lorem Ipsum', path: Paths.home },
  },
  {
    title: 'Have fun!',
    image: CardImage3,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis laoreet tellus.',
    button: { text: 'Lorem Ipsum', path: Paths.home },
  },
];

export const heroesCards: ComponentProps<typeof Cards>['cards'] = [
  {
    subtitle: 'Anhelina Vrubleuskaya',
    image: Anhelina,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis laoreet tellus.',
  },
  {
    subtitle: 'Olga Polyanskaya',
    image: Olga,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis laoreet tellus.',
  },
  {
    subtitle: 'Konstantin Shumak',
    image: Konstantin,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis laoreet tellus.',
  },
];
