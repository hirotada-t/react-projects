import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from './Components/Home';
import CreatePost from './Components/CreatePost';
import Login from './Components/Login';
import Logout from './Components/Logout';
import Navbar from './Components/Navbar';
import { useState } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/createpost" element={<CreatePost />}></Route>
      <Route path="/login" element={<Login setIsAuth={setIsAuth} />}></Route>
      <Route path="/logout" element={<Logout />}></Route>
    </Routes>
  </Router>);
}

export default App;
