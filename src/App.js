import './App.css';
import Header from './containers/Header';
import ProductDetails from "./containers/ProductDetails";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProductListing from './containers/ProductListing';

function App() {
  return (
    <>
      <BrowserRouter>
        <><Header /></>
        <Routes>
          <Route path='/' element={<ProductListing />} />
          <Route path='/product/:productId' element={<ProductDetails />} />
          <Route>404 Not Found</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
