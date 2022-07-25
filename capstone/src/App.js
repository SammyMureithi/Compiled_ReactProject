import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import Photo from './Pages/Photo';
import Cart from './Pages/Cart';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Photo />} />
        <Route path="cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
