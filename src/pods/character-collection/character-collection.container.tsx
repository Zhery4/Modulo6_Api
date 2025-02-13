import React from 'react';
import { useCharacterCollection } from './character-collection.hook';
import CharacterCollectionComponent from './character-collection.component';

const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } =
    useCharacterCollection();

  return <CharacterCollectionComponent />;
};

export default CharacterCollectionContainer;
