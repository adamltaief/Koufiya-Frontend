import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import PalestinianCulture from './pages/PalestinianCulture';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Index from './pages/Index';
import Gallery from './pages/Gallery';

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
              <Route path='/' element={<Index/>} />
              <Route path='/gallery' element={<Gallery/>} />
              <Route path='/palestinian-culture' element={<PalestinianCulture/>} />
              <Route path='/sign-up' element={<SignUp/>} />
              <Route path='/sign-in' element={<SignIn/>} />
        </Routes>       
      </Router> 
    </div>
  );
}

export default App;
