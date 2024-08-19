
import './App.css';
import Home from './pages/HomeMin';
import Contact from './pages/Contact';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import AddUser from './pages/AddUser';
import Edituser from './pages/EditUser';
import About from './pages/About';
import EnhancedTableHead from './pages/EnhancedTableHead'
import DataTable from './pages/DataTable'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>

        <Route path='/add' element={<AddUser/>}/>
        <Route path='/headtable' element={<EnhancedTableHead/>}/>
        <Route path='/datatable' element={<DataTable/>}/>
        <Route path='/edit/:id' element={<Edituser/>}/>


      </Routes>
      <Footer/> 
    </div>
  );
}

export default App;
