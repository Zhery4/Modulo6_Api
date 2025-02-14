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
    <Card
      className={classes.card}
      style={{
        backgroundImage: `url(${character.image})`,
        backgroundSize: 'cover',
      }}
    >
      <CardHeader title={character.name} subheader={character.species} />
      <div>
        <CardContent>
          <div className={classes.content}>
            <Typography variant="subtitle1" gutterBottom>
              {character.bestSentence}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {character.type}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {character.status}
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
            variant="contained"
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
      </div>
    </Card>
  );
};

export default CharacterCard;
