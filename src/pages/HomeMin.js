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
import EyeIcon from '@mui/icons-material/RemoveRedEye';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, loadUsers, getUserByID } from '../redux/actions';
import DeleteUser from '../components/Users/DeleteUser';
import ViewUser from '../components/Users/ViewUser';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import AddUserDialog from '../components/Users/AddUserDialog';
import EditUserDialog from '../components/Users/EditUserDialog';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users, user } = useSelector(state => state.data);

  const [openDelete, setOpenDelete] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState(null);
  const [openAddUser, setOpenAddUser] = useState(false);
  const [openEditUser, setOpenEditUser] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);
  const handleOpenAddUser = () => {
    setOpenAddUser(true);
  };

  const handleCloseAddUser = () => {
    setOpenAddUser(false);
  };


  const handleOpenEditUser = (userId) => {
    console.log("USER TO EDIT:"+userId)
    setUserToEdit(userId);
    setOpenEditUser(true);
  };

  const handleCloseEditUser = () => {
    setOpenEditUser(false);
    setUserToEdit(null);
  };


  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  const handleOpenDelete = (userId) => {
    setUserIdToDelete(userId);
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
    setUserIdToDelete(null);
  };

  const handleOpenDetails = (userId) => {
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
          <Button variant="contained" color="success" startIcon={<AddIcon />} onClick={handleOpenAddUser}>
            Add user
          </Button>
        </Box>

        <TableContainer component={Paper} sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#f9f9f9', borderRadius: '0px' }}>
          <Table sx={{ minWidth: 650 }} aria-label="customized table">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#1976d2', color: '#fff' }}>
                <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Image</TableCell>
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
                    {row.image ? (
                      <Avatar src={row.image} alt="User Image" />
                    ) : (
                      <Avatar />
                    )}
                  </TableCell>
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
                          color="warning"
                          onClick={() => handleOpenEditUser(row.id)}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          variant="contained"
                          color="info"

                          onClick={() => handleOpenDetails(row.id)}
                        >
                          <EyeIcon />
                        </IconButton>
                        <IconButton
                          variant="contained"
                          color="error"
                          onClick={() => handleOpenDelete(row.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ButtonGroup>

                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      <DeleteUser
        open={openDelete}
        handleClose={handleCloseDelete}
        userIdToDelete={userIdToDelete}
      />

      <ViewUser
        open={openDetails}
        handleClose={handleCloseDetails}
        user={user}
      />

      <AddUserDialog
        open={openAddUser}
        handleClose={handleCloseAddUser}
      />

      <EditUserDialog
        open={openEditUser}
        handleClose={handleCloseEditUser}
        userId={userToEdit}
      />
    </div>
  );
}

export default Home;
