import {Navbar, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand >
                <Link to="/">Fish Diary</Link>
            </Navbar.Brand>
            <Button variant="success">
                <Link to="/register">Sign Up</Link>
                </Button>
        </Navbar>
    )
}

export default NavBar;