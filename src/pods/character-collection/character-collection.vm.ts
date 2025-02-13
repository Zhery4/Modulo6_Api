import { CharacterVm } from '#pods/character/character.vm';

export interface CharacterEntityVm {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
}
