import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Home from './pages/HomeMin';
import Contact from './pages/Contact';
import About from './pages/About';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import EnhancedTableHead from './pages/EnhancedTableHead';
import DataTable from './pages/DataTable';
import { Box } from '@mui/material';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="App">
      {/* Conditionally render Header, Sidebar, and Footer */}
      {!isAuthPage && <Header />}
      {!isAuthPage && (
        <Box sx={{ display: 'flex' }}>
          <Sidebar />
          {/* Main Content */}
          <Box sx={{ flexGrow: 1, p: 3 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/add" element={<AddUser />} />
              <Route path="/headtable" element={<EnhancedTableHead />} />
              <Route path="/datatable" element={<DataTable />} />
              <Route path="/edit/:id" element={<EditUser />} />
            </Routes>
          </Box>
        </Box>
      )}

      {/* Routes for Auth Pages */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {/* Conditionally render Footer */}
      {!isAuthPage && <Footer />}
    </div>
  );
}

export default App;
