import { CharacterVm } from '#pods/character/character.vm';

export interface CharacterCollectionVm {
  info: {
    count: number;
  };
  results: CharacterVm[];
}
