import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Login from './component/Login';
import MyAccunt from './component/MyAccunt';
import SignUp from './component/SignUp';
import GlobalContext from './contexts/GlobalContext';
import Home from './page/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <GlobalContext>
      <div className='App'>
        <Router>
          <Header />
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
          <Route path='/signup' exact component={SignUp} />
          <Route path='/myaccount' exact component={MyAccunt} />
        </Router>
      </div>
    </GlobalContext>
  );
}

export default App;
