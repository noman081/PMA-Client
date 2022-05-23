import './App.css';
import Header from './Pages/Shared/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
