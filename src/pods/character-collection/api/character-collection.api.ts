import { getRequests } from '#core/api';
import { CharacterCollectionApi } from './character-collection.api-model';

export const getCharacterCollection =
  async (): Promise<CharacterCollectionApi> => {
    return getRequests('character');
  };
