import React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import CharacterCard from './components/character-card.component';
import * as classes from './character-collection.styles';
interface ICharacterCollectionProps {
  charactersList: CharacterEntityVm[];
}

const CharacterCollectionComponent = (props: ICharacterCollectionProps) => {
  const { charactersList } = props;
  return (
    <div>
      <ul className={classes.list}>
        {charactersList.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterCollectionComponent;
