import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Product from './components/Product'
import products from './data';
import { Col, Container, Row } from 'react-bootstrap';
import ProductPage from './pages/ProductPage';
import HomePage from './pages/HomePage';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <main className='py-4'>
        <Header />
        <Container>
          <Outlet/>
        </Container>
        <Footer />
      </main>
    </>
  )
}

export default App
