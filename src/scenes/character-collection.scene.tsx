import { AppLayout } from '#layouts';
import CharacterCollectionContainer from '#pods/character-collection/character-collection.container';
import React from 'react';

const CharacterCollectionScene = () => {
  return (
    <AppLayout>
      <CharacterCollectionContainer />
    </AppLayout>
  );
};

export default CharacterCollectionScene;
