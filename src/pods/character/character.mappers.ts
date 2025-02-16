import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.CharacterVm => ({
    ...character,
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    type: character.type,
});

export const mapCharacterFromVmToApi = (character: viewModel.CharacterVm): apiModel.CharacterEntityApi =>
  (({
    ...character,
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    type: character.type
  } as unknown) as apiModel.CharacterEntityApi);
