// src/components/ViewUser.js
import React, {  useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InfoIcon from '@mui/icons-material/Info';
import Slide from '@mui/material/Slide';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AppBar from '@mui/material/AppBar';
import EditUserDialog from './EditUserDialog';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

const ViewUser = ({ open, handleClose, user }) => {

  const [openEditUser, setOpenEditUser] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);

  const handleCloseEditUser = () => {
    setOpenEditUser(false);
    // dispatch(getUserByID(user.id));
    setUserToEdit(user.id);
  };
  


  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="user-details-dialog-title"
        TransitionComponent={Transition}
        fullWidth
        fullScreen
        maxWidth="sm"
      >
        {/* <DialogTitle id="user-details-dialog-title">User Details</DialogTitle> */}
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              User details
            </Typography>
            {/* <Button autoFocus color="inherit" onClick={()=>handleEdit(user.id)}>
              Edit
            </Button> */}
          </Toolbar>
        </AppBar>
        <DialogContent dividers>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            {user.image ? (
              <Avatar src={user.image} alt="User Image" sx={{ width: 80, height: 80, marginRight: 2 }} />
            ) : (
              <Avatar sx={{ width: 80, height: 80, marginRight: 2 }} />
            )}
            <Typography variant="h6">{user.name}</Typography>
          </div>
          <List>
            <ListItem>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary="Email" secondary={user.email} />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText primary="Phone" secondary={user.contact} />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary="Location" secondary={user.address} />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="Biography" secondary={user.bio} />
            </ListItem>
          </List>
        </DialogContent>
        {/* <DialogActions>
        <Button onClick={handleClose} color="primary" variant="contained">
          Close
        </Button>
      </DialogActions> */}
      </Dialog>
      <EditUserDialog
        open={openEditUser}
        handleClose={handleCloseEditUser}
        userId={userToEdit}
      />
    </>

  );
}

export default ViewUser;
