import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';
import { useNavigate } from 'react-router-dom';

interface ICharacterCardProps {
  character: CharacterEntityVm;
}

const CharacterCard = (props: ICharacterCardProps) => {
  const { character } = props;
  const navigate = useNavigate();

  useEffect(() => {
    console.log(character);
  }, []);
  return (
    <Card>
      <CardHeader title={character.name} subheader={character.species} />
      <CardContent>
        <div className={classes.content}>
          {
            <CardMedia
              image={character.image}
              title={character.name}
              style={{ height: 0, paddingTop: '56.25%' }}
            />
          }
          <Typography variant="subtitle1" gutterBottom>
            {character.name}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            navigate(`/characters/${character.id}/details`);
          }}
        >
          Details
        </Button>
        {/* <IconButton onClick={() => onEdit(hotel.id)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onDelete(hotel.id)}>
          <DeleteIcon />
        </IconButton> */}
      </CardActions>
    </Card>
  );
};

export default CharacterCard;
