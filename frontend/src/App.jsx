import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import './App.css'
import LoginPage from '../components/LoginPage';
import SignUpPage from '../components/SignUpPage';
import PageLayout from '../components/PageLayout'

function App() {

  return (
    <Routes>
      <Route path='/' element={<PageLayout />}>
        <Route index element={<div>Homepage</div>} />
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/signup'} element={<SignUpPage />} />
      </Route>
    </Routes>
  );
}

export default App;
