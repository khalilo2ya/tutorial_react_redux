import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
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
import { useNavigate } from 'react-router-dom';


import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, loadUsers } from '../redux/actions';

const Home = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector(state => state.users)

  useEffect(() => {
    dispatch(loadUsers())
  }, [dispatch])


  const handleDelete = (userId) => {
    if (window.confirm("Are you sure to delete the user!!?")) {
      dispatch(deleteUser(userId));
    }
  }


  return (
    <div>
      <Container maxWidth="m" sx={{ marginTop: '2rem' }}>
        <Box sx={{ textAlign: 'left', marginBottom: '1rem' }}>
          <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={()=> navigate('/add')} >Add user</Button>
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
                      <Button variant="contained" color="success" startIcon={<EditIcon />}>Edit</Button>
                      <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={() => handleDelete(row.id)}/>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  )
}

export default Home;
