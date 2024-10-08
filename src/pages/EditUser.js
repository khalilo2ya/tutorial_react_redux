import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserByID, updateUser } from '../redux/actions';
import StyledFileInput from '../components/StyledFileInput';

const Edituser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    bio: "",
    image: ""  // Nouveau champ pour l'image
  });

  const { user } = useSelector((state) => state.data);
  const [error, setError] = useState("");

  const { name, email, contact, address, bio, image } = state;

  // Fetching user data by ID
  useEffect(() => {
    if (id) {
      dispatch(getUserByID(id));
    }
  }, [dispatch, id]);

  // Updating state with fetched user data
  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);

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
      dispatch(updateUser(state, id));
      navigate("/");
    }
  }

  return (
    <Container maxWidth="sm" sx={{ marginTop: '2rem' }}>
      <Paper elevation={3} sx={{ padding: '2rem', textAlign: 'center' }}>
        <Box sx={{ textAlign: 'left', marginBottom: '1rem' }}>
          <Button variant="contained" color="primary" startIcon={<ArrowBackIcon />} onClick={() => navigate('/')}>
            go Back
          </Button>
          <h2>Edit User</h2>
          {/* {error && <h3 style={{ color: "red" }}>{error}</h3>} */}
          {error && <Alert severity="error" variant="outlined">{error}</Alert>}
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
            Update
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Edituser;
