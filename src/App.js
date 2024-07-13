import Navbar from './components/NavBar/navbar.jsx'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home.jsx';
import Help from './pages/Help/help.jsx';
import Services from './pages/services/services.jsx';
import Contact from './pages/Contact/contact.jsx';

function App() {
  return (
    <>
     <div className='App'><Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/service' element={<Services/>} />
        <Route path='/help' element={<Help/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
     </div>
    </>
 
  );
}

export default App;
