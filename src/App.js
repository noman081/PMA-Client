import './App.css';
import Header from './Pages/Shared/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import AddProjects from './Pages/Projects/AddProjects';
import Home from './Pages/Home/Home';
import Enrollment from './Pages/Enrollment/Enrollment';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/addProject' element={
          <RequireAuth>
            <AddProjects />
          </RequireAuth>
        }></Route>
        <Route path='/enrollment/:id' element={
          <RequireAuth>
            <Enrollment />
          </RequireAuth>
        }></Route>

      </Routes>
    </div>
  );
}

export default App;
