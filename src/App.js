
import './App.css';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login />}/>
    <Route path='/Home' element={<Home />}/>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
