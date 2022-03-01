import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Header() {
    let history = useNavigate();
    const user = JSON.parse(localStorage.getItem('user-info'));

    function logout() {
        localStorage.clear();
        history('/');
    }
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto nav_bar_wrapper">
                        {
                            localStorage.getItem('user-info') ?
                                <>
                                    <Link to="/add">Add Product</Link>
                                    <Link to="/update">Update Product</Link>
                                </> :
                                <>
                                    <Link to="/">Home</Link>
                                    <Link to="/login">Login</Link>
                                    <Link to="/register">Register</Link>
                                </>

                        }
                    </Nav>

                    <Nav>
                        {
                            localStorage.getItem('user-info') ?
                                <NavDropdown title={user && user.name}>
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                    <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                                </NavDropdown>
                                : null
                        }
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;