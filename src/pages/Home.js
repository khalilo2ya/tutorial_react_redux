import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, loadUsers, getUserByID } from '../redux/actions';
import Slide from '@mui/material/Slide';
import InfoIcon from '@mui/icons-material/Info';
import EyeIcon from '@mui/icons-material/RemoveRedEye';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
// Divider ListItemText ListItemIcon

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users, user } = useSelector(state => state.data);

  const [open, setOpen] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState(null);

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  const handleClickOpen = (userId) => {
    setUserIdToDelete(userId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setUserIdToDelete(null);
  };

  const handleDelete = () => {
    if (userIdToDelete) {
      dispatch(deleteUser(userIdToDelete));
      handleClose();
    }
  };

  const handleViewDetails = (userId) => {
    dispatch(getUserByID(userId));
    setOpenDetails(true);
  };

  const handleCloseDetails = () => {
    setOpenDetails(false);
  };

  return (
    <div>
      <Container maxWidth="m" sx={{ marginTop: '2rem' }}>
        <Box sx={{ textAlign: 'left', marginBottom: '1rem' }}>
          <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={() => navigate('/add')}>Add user</Button>
        </Box>
        <TableContainer component={Paper} sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#f9f9f9', borderRadius: '0px' }}>
          <Table sx={{ minWidth: 650 }} aria-label="customized table">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#1976d2', color: '#fff' }}>
                <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Name</TableCell>
                <TableCell align="left" sx={{ color: '#fff', fontWeight: 'bold' }}>Address</TableCell>
                <TableCell align="left" sx={{ color: '#fff', fontWeight: 'bold' }}>Email</TableCell>
                <TableCell align="left" sx={{ color: '#fff', fontWeight: 'bold' }}>Contact</TableCell>
                <TableCell align="center" sx={{ color: '#fff', fontWeight: 'bold' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users && users.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 }, '&:hover': { backgroundColor: '#f1f1f1' } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.address}</TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell align="left">{row.contact}</TableCell>
                  <TableCell align="center">
                    <ButtonGroup
                      disableElevation
                      variant="contained"
                      aria-label="Disabled button group"
                    >
                      <IconButton
                        variant="contained"
                        color="success"
                        onClick={() => navigate(`/edit/${row.id}`)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        variant="contained"
                        color="info"

                        onClick={() => handleViewDetails(row.id)}
                      >
                        <EyeIcon />
                      </IconButton>
                      <IconButton
                        variant="contained"
                        color="error"
                        onClick={() => handleClickOpen(row.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        TransitionComponent={Transition}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirm Deletion"}
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this user? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} variant="contained" color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openDetails}
        onClose={handleCloseDetails}
        aria-labelledby="user-details-dialog-title"
        TransitionComponent={Transition}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle id="user-details-dialog-title">User Details</DialogTitle>
        <DialogContent  dividers>
          <List>
            <ListItem>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Company" secondary={user.name} />
            </ListItem>
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
                <InfoIcon /> {/* Icône pour la biographie */}
              </ListItemIcon>
              <ListItemText primary="Biography" secondary={user.bio} /> {/* Ajout de la biographie */}
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDetails} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}

export default Home;
