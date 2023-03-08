import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
import CodeforInterview from './component/CodeforInterview';
import AddUser from './component/AddUser';
import AllUser from './component/AllUser';
import EditUser from './component/EditUser';

import {BrowserRouter, Routes, route, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
  <NavBar/>
  <Routes>
  <Route path='/' element={<CodeforInterview/>} />
  <Route path='/add' element={ <AddUser/>} />
  <Route path='/all' element= {<AllUser/>}/>
  <Route path='/edit/:id' element= {<EditUser/>}/>
  </Routes>
    </BrowserRouter>
  );
}

export default App;
