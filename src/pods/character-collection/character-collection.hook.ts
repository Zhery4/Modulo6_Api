import React from 'react';
import { CharacterEntityVm } from './character-collection.vm';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterEntityVm[]
  >([]);

  const loadHotelCollection = () => {
    // getHotelCollection().then((result) =>
    //   setHotelCollection(mapToCollection(result, mapFromApiToVm))
    // );
  };

  return { characterCollection, loadHotelCollection };
};
