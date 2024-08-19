import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { getUserByID, updateUser } from '../../redux/actions'; // Ensure the action paths are correct
import StyledFileInput from '../StyledFileInput';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const EditUserDialog = ({ open, handleClose, userId }) => {
    console.log("USER TO EDIT IN DIALOG NOW:" + userId)
    const dispatch = useDispatch();
    const [state, setState] = useState({
        name: "",
        email: "",
        contact: "",
        address: "",
        bio: "",
        image: ""
    });

    const { user } = useSelector((state) => state.data); // Adjust selector to match your store structure
    const [error, setError] = useState("");

    const { name, email, contact, address, bio, image } = state;

    // Fetch user data by ID when the dialog opens
    useEffect(() => {
        if (userId) {
            dispatch(getUserByID(userId));
        }
    }, [dispatch, userId]);

    // Update state with fetched user data
    useEffect(() => {
        if (user) {
            setState({ ...user });
        }
    }, [user]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setState({ ...state, image: reader.result });
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        setState({ ...state, image: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !contact || !address) {
            setError("Please fill all the inputs");
        } else {
            dispatch(updateUser(state, userId));
            handleClose(); // Close the dialog after updating the user
            setError(""); // Clear any error
        }
    };

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth fullScreen TransitionComponent={Transition}>
            <DialogTitle>Edit User</DialogTitle>
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
                    {error && <Alert severity="error" variant="outlined">{error}</Alert>}
                    <TextField
                        type="text"
                        variant="standard"
                        label="Name"
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                        fullWidth
                    />
                    <TextField
                        type="email"
                        variant="standard"
                        label="Email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        fullWidth
                    />
                    <TextField
                        type="number"
                        variant="standard"
                        label="Contact"
                        name="contact"
                        value={contact}
                        onChange={handleInputChange}
                        fullWidth
                    />
                    <TextField
                        type="text"
                        variant="standard"
                        label="Address"
                        name="address"
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
                <Button onClick={handleSubmit} color="primary" variant="contained">Update</Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditUserDialog;
