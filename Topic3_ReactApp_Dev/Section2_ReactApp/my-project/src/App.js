import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Category, Home, Product, ProductDetail, Header } from './components/admin/Index'
import { Col, Container, Row } from 'react-bootstrap'

function App() {
  return (
    // Routes:
    <BrowserRouter>
      <Container>
        <Header />
        <Row>
          <Col md={2}>
            <ul>
              <li><Link to={'/category'}>Category</Link></li>
              <li><Link to={'/product'}>Product</Link></li>
            </ul>
          </Col>
          <Col md={10}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/product' element={<Product />} />
              <Route path='/product/:id' element={<ProductDetail />} />
              <Route path='/category' element={<Category />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
