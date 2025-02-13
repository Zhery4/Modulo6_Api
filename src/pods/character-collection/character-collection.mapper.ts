import { CharacterEntityApi } from './api/character-collection.api-model';
import { CharacterEntityVm } from './character-collection.vm';

export const mapFromApiToVm = (
  character: CharacterEntityApi
): CharacterEntityVm => ({
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
});
