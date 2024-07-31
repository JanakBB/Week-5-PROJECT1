import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <main>
        <Header />
        <Container className='p-4'>
          <Outlet/>
        </Container>
        <Footer />
      </main>
    </>
  )
}

export default App
