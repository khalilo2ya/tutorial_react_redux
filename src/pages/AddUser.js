import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/actions';
const AddUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    bio: ""
  });
  const [error, setError] = useState("");

  const { name, email, contact, address, bio } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  const handleSumbit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact || !address) {
      setError("Please fill all the inputs");
    }else{
      dispatch(addUser(state));

      navigate("/")
    }

  }

  return (
    <Container maxWidth="sm" sx={{ marginTop: '2rem' }}>
      <Box sx={{ textAlign: 'left', marginBottom: '1rem' }}>
        <h2>Add New User</h2>
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
        <Button variant="contained" color="primary" startIcon={<ArrowBackIcon />} onClick={() => navigate('/')}>
          Back
        </Button>
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
        onSubmit={handleSumbit}
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
        <Button variant='contained' color='primary' type='submit'>
          Save
        </Button>
      </Box>
    </Container>
  );
};

export default AddUser;
