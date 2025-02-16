import React, { useEffect } from 'react';
import { useCharacterCollection } from './character-collection.hook';
import CharacterCollectionComponent from './character-collection.component';

const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } =
    useCharacterCollection();

  useEffect(() => {
    loadCharacterCollection();
  }, []);

  return <CharacterCollectionComponent charactersList={characterCollection} />;
};

export default CharacterCollectionContainer;
