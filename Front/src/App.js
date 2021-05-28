import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserContext from './contexts/UserContext';
import { getUser } from './api/API';
import './App.css';
import Header from './component/Header';
import Login from './component/Login';
import Home from './vewe/Home';

function App() {
  const [users, setusers] = useState('');
  const [userName, setuserName] = useState("Login");
  const [isConnected, setIsConnected] = useState(false);
/*   console.log(isConnected) */

  const [movies, setmovies] = useState('');
    useEffect(() => {
      getUser().then((res) => setusers(res));
    }, []);
  return (
    <div className='App'>
      <Router>
        <UserContext.Provider
          value={{
            isConnected: isConnected,
            setIsConnected: setIsConnected,
            userName: userName,
            setuserName: setuserName,
          }}
        >
          <Header />
        </UserContext.Provider>
        <UserContext.Provider
          value={{
            movies: movies,
            setmovies: setmovies,
            isConnected: isConnected,
          }}
        >
          <Route path='/' exact component={Home} />
        </UserContext.Provider>
        <UserContext.Provider
          value={{
            users: users,
            isConnected: isConnected,
            setIsConnected: setIsConnected,
            setuserName: setuserName,
          }}
        >
          <Route path='/login' exact component={Login} />
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
