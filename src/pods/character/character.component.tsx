import * as classes from './character.styles';
import React from 'react';
import { CharacterVm } from './character.vm';
import { Button, Typography } from '@mui/material';
import CharacterModal from './components/character.modal';

interface ICharacterComponentProps {
  character: CharacterVm;
}
const CharacterComponent = (props: ICharacterComponentProps) => {
  const { character } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const [bestSentence, setBestSentence] = React.useState(character.bestSentence);

  const handleSave = (newSentence: string) => {
    setBestSentence(newSentence);
  };

  return <div className={classes.CharacterContent}>
      <div className={classes.CharacterContentHeader}>
        <img src={character.image} alt="" />
        <div>
          <Typography component="h3" variant='h3' > {character.name}</Typography>
          <p>Origin: {character.origin.name}</p>
          <p>Location: {character.location.name}</p>
          <Button onClick={() => setIsOpen(!isOpen)}>{'Edit'}</Button>
        </div>
      </div>
      <div className={classes.CharacterContentDetails}>
        <Typography variant="h4" component="h2">
          Details
        </Typography>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
      </div>
      <div className={classes.CharacterContentDetails}>
        <p>bestSentence: {bestSentence}</p>
      </div>
      <div>
          <Typography variant="h6" component="h2">
            Episodes
          </Typography>
          <ul>
            {character.episode.map((episode) => (
              <li key={episode}>{episode}</li>
            ))}
          </ul>
      </div>      
      <CharacterModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        bestSentence={bestSentence}
        onSave={handleSave}
      />
  </div>;
};

export default CharacterComponent;
