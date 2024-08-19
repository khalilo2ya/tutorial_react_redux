import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/actions';
import StyledFileInput from '../components/StyledFileInput';

import Alert from '@mui/material/Alert';

const AddUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    bio: "",
    image: ""  // Nouvelle propriété pour l'image
  });
  const [error, setError] = useState("");

  const { name, email, contact, address, bio, image } = state;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setState({ ...state, image: reader.result });
    }

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  const handleRemoveImage = () => {
    setState({ ...state, image: "" });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact || !address) {
      setError("Please fill all the inputs");
    } else {
      dispatch(addUser(state));
      navigate("/");
    }
  }

  return (
    <Container maxWidth="sm" sx={{ marginTop: '2rem' }}>
      <Paper elevation={3} sx={{ padding: '2rem', textAlign: 'center' }}>
        <Box sx={{ textAlign: 'left', marginBottom: '1rem' }}>
          <Button variant="contained" color="primary" startIcon={<ArrowBackIcon />} onClick={() => navigate('/')}>
            Go Back
          </Button>
          <h2>Add New User</h2>
          {/* {error && <Alert severity="error" variant="filled">{error}</Alert>} */}
          {error && <Alert severity="error" variant="outlined"  >{error}</Alert>}

          
        </Box>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            type='text'
            variant='standard'
            label='Name'
            name='name'
            value={name}
            onChange={handleInputChange}
          />
          <TextField
            type='email'
            variant='standard'
            label='Email'
            name='email'
            value={email}
            onChange={handleInputChange}
          />
          <TextField
            type='number'
            variant='standard'
            label='Contact'
            name='contact'
            value={contact}
            onChange={handleInputChange}
          />
          <TextField
            type='text'
            variant='standard'
            label='Address'
            name='address'
            value={address}
            onChange={handleInputChange}
          />
          <TextField
            type="text"
            variant="standard"
            label="Biography"
            name="bio"
            value={bio}
            onChange={handleInputChange}
            multiline
            rows={4}
          />
          <StyledFileInput
            image={image}
            onChange={handleImageChange}
            onRemove={handleRemoveImage}
          />
          <Button variant='contained' color='primary' type='submit'>
            Save
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default AddUser;
