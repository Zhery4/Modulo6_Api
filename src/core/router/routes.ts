import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  hotelCollection: string;
  createHotel: string;
  editHotel: string;
  characterCollection: string;
  createCharacter: string;
  editCharacter: string;
  detailsCharacter: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  hotelCollection: '/hotels',
  createHotel: '/hotels/create',
  editHotel: '/hotels/:id',
  characterCollection: '/characters',
  createCharacter: '/characters/create',
  editCharacter: '/characters/:id',
  detailsCharacter: '/characters/:id/details',
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes
  extends Omit<
    SwitchRoutes,
    'editHotel' | 'editCharacter' | 'detailsCharacter'
  > {
  editHotel: NavigationFunction;
  editCharacter: NavigationFunction;
  detailsCharacter: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  editHotel: (id) => generatePath(switchRoutes.editHotel, { id }),
  editCharacter: (id) => generatePath(switchRoutes.editCharacter, { id }),
  detailsCharacter: (id) => generatePath(switchRoutes.detailsCharacter, { id }),
};
