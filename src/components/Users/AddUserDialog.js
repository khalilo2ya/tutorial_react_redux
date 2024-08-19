import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/actions';
import StyledFileInput from '../StyledFileInput';

import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


const AddUserDialog = ({ open, handleClose }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    bio: "",
    image: ""  
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
      setState("");
      setError("")
      handleClose(); // Ferme la boîte de dialogue après l'ajout
    }
  }

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth fullScreen TransitionComponent={Transition}>
      <DialogTitle>Add New User</DialogTitle>
      {error && <Alert severity="error" variant="outlined"  >{error}</Alert>}
      <DialogContent>
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
            fullWidth
          />
          <TextField
            type='email'
            variant='standard'
            label='Email'
            name='email'
            value={email}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            type='number'
            variant='standard'
            label='Contact'
            name='contact'
            value={contact}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            type='text'
            variant='standard'
            label='Address'
            name='address'
            value={address}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            type="text"
            variant="standard"
            label="Biography"
            name="bio"
            value={bio}
            onChange={handleInputChange}
            multiline
            rows={2}
            fullWidth
          />
          <StyledFileInput
            image={image}
            onChange={handleImageChange}
            onRemove={handleRemoveImage}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">Cancel</Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddUserDialog;
