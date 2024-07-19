import NavBar from '../components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignButtons from '../components/SignButtons';
import './App.css'
import Homepage from '../components/Homepage';
import LoginForm from '../components/LoginForm';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' exact component={Homepage} />
        <Route path='/auth/signup' component={LoginForm} />
      </Routes>
    </Router>
  );
}

export default App;
