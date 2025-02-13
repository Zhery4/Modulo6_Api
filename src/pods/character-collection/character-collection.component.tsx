import React, { useEffect } from 'react';
import { CharacterEntityVm } from './character-collection.vm';

interface ICharacterCollectionProps {
  charactersList: CharacterEntityVm[];
}

const CharacterCollectionComponent = (props: ICharacterCollectionProps) => {
  const { charactersList } = props;
  return <div>characterList Component</div>;
};

export default CharacterCollectionComponent;
