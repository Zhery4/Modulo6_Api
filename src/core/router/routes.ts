import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  createCharacter: string;
  editCharacter: string;
  detailsCharacter: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters',
  createCharacter: '/characters/create',
  editCharacter: '/characters/:id',
  detailsCharacter: '/characters/:id/details',
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes
  extends Omit<
    SwitchRoutes,
    'editCharacter' | 'detailsCharacter'
  > {
  editCharacter: NavigationFunction;
  detailsCharacter: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  editCharacter: (id) => generatePath(switchRoutes.editCharacter, { id }),
  detailsCharacter: (id) => generatePath(switchRoutes.detailsCharacter, { id }),
};
