import logo from './logo.svg';
import './App.css';
import Home from './crud/home/home';
import Create from './crud/create/create';
import Update from './crud/update/update';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<Home />}></Route>
           <Route path='/create' element={<Create />}></Route>
           <Route path='/edit/:id' element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
