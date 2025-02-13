import { getRequests } from '#core/api';
import { CharacterEntityApi } from './character-collection.api-model';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  return getRequests('character');
};
