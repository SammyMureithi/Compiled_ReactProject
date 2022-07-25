import './App.css';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import Cart from './Pages/Cart';
import Ordes from './Pages/Ordes';
import Header from './Components/Header';
import {Route,Routes} from "react-router-dom"
import ProductMaster from './Components/ProductMaster';

function App() {
  return (
    <div className="App">
      <Header />
     
      <Routes>
              <Route path="/" element={<HomePage/>}>
                  <Route index element={<HomePage/>}/>
              </Route>
              <Route path='cart' element={<Cart/>} />
              <Route path='order' element={<Ordes/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
