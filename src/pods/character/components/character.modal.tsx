import React from 'react';
import { Modal, Box, Typography, Button, TextField } from '@mui/material';
import { Formik, Form, Field } from 'formik';

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
            onSave(values.bestSentence);
            onClose();
          }}
        >
          {() => (
            <Form>
              <Field
                component={TextField}
                name="bestSentence"
                label="Best Sentence"
                fullWidth
                margin="normal"
              />
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
