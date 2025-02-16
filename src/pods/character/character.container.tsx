import React, { useEffect } from 'react';
import { getCharacterDetails } from './api';
import { useParams } from 'react-router-dom';
import { CharacterVm, createEmptyCharacter } from './character.vm';
import { mapCharacterFromApiToVm } from './character.mappers';
import CharacterComponent from './character.component';
import { Icon, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CharacterContainer = () => {
  const [character, setCharacter] = React.useState<CharacterVm>(createEmptyCharacter());
  const { id } = useParams<{ id: string }>();

  useEffect(() =>{
    getCharacterDetails(id).then((character) => {
      setCharacter(mapCharacterFromApiToVm(character));
    });
  },[])

  return <>
  <IconButton  onClick={() => window.history.back()}><ArrowBackIcon/></IconButton>
  <CharacterComponent character={character} />
  </>;
};

export default CharacterContainer;
