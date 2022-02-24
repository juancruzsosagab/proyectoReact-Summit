import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Login from './Pages/Login';
import Success from './Pages/Success';


function App() {

  const [isLogin, setIsLogin] = useState(false);

  const logIn = () => {
    setIsLogin(true)
  }

  const logOut = () => {
    setIsLogin(false)
  }


  return (
    <div className="App">
      {
        !isLogin ?
          <Login logIn={logIn} />
          :
          <Success logOut={logOut} />
      }

    </div>
  );
}

export default App;
