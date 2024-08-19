import React from 'react';
import { Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import { Delete as DeleteIcon } from '@mui/icons-material';

const Input = styled('input')({
  display: 'none',
});

const ImageContainer = styled(Box)({
  position: 'relative',
  display: 'inline-block',
  width: '100px',
  height: '100px',
});

const ImagePreview = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '4px',
});

const UploadButton = styled(Button)({
  marginTop: '1rem',
});

const RemoveButton = styled(Button)({
  position: 'absolute',
  bottom: '5px',
  right: '5px',
  color: 'white',
  backgroundColor: 'red',
  '&:hover': {
    backgroundColor: '#c62828',
  },
  borderRadius: '50%',
  minWidth: '30px',
  height: '30px',
  padding: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledFileInput = ({ image, onChange, onRemove }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left', gap:'10px' }}>
      <label htmlFor="upload-button-file">
        <Input
          id="upload-button-file"
          accept="image/*"
          type="file"
          onChange={onChange}
        />
        <UploadButton
          variant="outlined"
          component="span"
          color="primary"
        >
          Choose Image ...
        </UploadButton>
      </label>
      {image && (
        <ImageContainer>
          <ImagePreview src={image} alt="User Preview" />
          <RemoveButton
            variant="contained"
            onClick={onRemove}
          >
            <DeleteIcon />
          </RemoveButton>
        </ImageContainer>
      )}
    </Box>
  );
};

export default StyledFileInput;
