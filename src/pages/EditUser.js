import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, getUserByID, updateUser } from '../redux/actions';
const Edituser = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: ""
  });
  const { user } = useSelector((state)=> state.data);
  const [error, setError] = useState("");
  const { name, email, contact, address } = state;



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
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  const handleSumbit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact || !address) {
      setError("Please fill all the inputs");
      console.log("Please fill all the inputs")
    } else {
      dispatch(updateUser(state, id));

      navigate("/")
    }

  }

  return (
    <Container maxWidth="sm" sx={{ marginTop: '2rem' }}>
      <Box sx={{ textAlign: 'left', marginBottom: '1rem' }}>
        <h2>Edit User</h2>
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
        <Button variant='contained' color='primary' type='submit'>
          Update
        </Button>
      </Box>
    </Container>
  );
};

export default Edituser;
