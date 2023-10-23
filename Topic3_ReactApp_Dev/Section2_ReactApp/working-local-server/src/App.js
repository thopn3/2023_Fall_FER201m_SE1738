import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './components/Product';
import ProductPost from './components/ProductPost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Product/>} />
        <Route path='/products' element={<Product/>} />
        <Route path='/products/create' element={<ProductPost/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
