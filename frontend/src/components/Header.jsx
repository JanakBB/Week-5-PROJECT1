import {Navbar, Nav, Container} from 'react-bootstrap';
import logo from "../assets/react.svg";
import {FaShoppingCart, FaUser} from "react-icons/fa";

function Header() {
    return (
        <header>
            <Navbar variant='dark' bg='dark' expand='md' collapseOnSelect >
                <Container>
                    <Navbar.Brand>
                        <img src={logo} alt="logo" />Broadway
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='navbar' />
                    <Nav className='ms-auto'>
                        <Nav.Link>
                            <FaShoppingCart />
                            Cart
                        </Nav.Link>
                        <Nav.Link>
                            <FaUser />
                            Signin
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
