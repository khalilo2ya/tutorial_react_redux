
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import AddUser from './pages/AddUser';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/add' element={<AddUser/>}/>

      </Routes>
      <Footer/> 
    </div>
  );
}

export default App;
