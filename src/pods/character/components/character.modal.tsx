import React from 'react';
import { Modal, Box, Typography, Button, TextField } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { TextFieldComponent } from '#common/components';

interface CharacterModalProps {
  isOpen: boolean;
  onClose: () => void;
  bestSentence: string;
  onSave: (newSentence: string) => void;
}

const CharacterModal: React.FC<CharacterModalProps> = ({ isOpen, onClose, bestSentence, onSave }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={{ ...modalStyle }}>
        <Typography variant="h6" component="h2">
          Edit Best Sentence
        </Typography>
        <Formik
          initialValues={{ bestSentence }}
          onSubmit={(values) => {
            console.log(values.bestSentence);
            onSave(values.bestSentence);
            onClose();
          }}
        >
          {() => (
            <Form>
              <TextFieldComponent name="bestSentence" label="Best Sentence" />
              <Button type="submit" variant="contained" color="primary">
                Save
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default CharacterModal;
