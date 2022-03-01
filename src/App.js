import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Login from './Pages/Login';
import Home from './Pages/Home';
import UserDetail from './Pages/UserDetail';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  const [isLogin, setIsLogin] = useState(false);

  const logIn = (token) => {
    localStorage.setItem("token", token)
    setIsLogin(true)
  }

  const logOut = () => {
    localStorage.removeItem("token")
    setIsLogin(false)
  }


  return (
    <div className="align-items-center text-center">
      {
        !isLogin ?
          <Login logIn={logIn} />
          :
          <BrowserRouter>
          <Navbar logOut={logOut} />
          <Routes>
            <Route path="" element={<Home  />} />
            <Route path="/:id" element={<UserDetail />} />
          </Routes>
          </BrowserRouter>
      }

    </div>
  );
}

export default App;
