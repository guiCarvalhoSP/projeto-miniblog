import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';

import { useAuthentication } from './hooks/useAuthentication';

import { AuthProvider } from './context/authContext';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {

  const [user, setUser] = useState(undefined);
  const {auth} = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) =>{
      setUser(user);  
    })
  }, [auth])

  if(loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/register' element={<Register />}></Route>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
