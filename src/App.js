import './App.css';
import Menu from './components/Menu/Menu';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Game from './components/Game/Game';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu/>}/>
        <Route path='/play' element={<Game/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
