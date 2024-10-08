// src/components/ViewUser.js
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import Slide from '@mui/material/Slide';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const ViewUser = ({ open, handleClose, user }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="user-details-dialog-title"
      TransitionComponent={Transition}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle id="user-details-dialog-title">User Details</DialogTitle>
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
      <DialogActions>
        <Button onClick={handleClose} color="primary" variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ViewUser;
