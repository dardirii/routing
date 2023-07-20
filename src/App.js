import './App.css';
import Nav from './Component/Navbar';
import {Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
