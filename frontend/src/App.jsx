import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap';
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
