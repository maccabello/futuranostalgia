import Nav from 'react-bootstrap/Nav'
import Cartwidget from './CartWidget'

const Navbar = () => {
    return(
        <>
        <Nav className="navbar navbar-dark bg-dark">
            <a href="index.html">Home</a>
            <a href="#!">Sobre nosotrxs</a>
            <Cartwidget/>
        </Nav>
        </>
    )
}
export default Navbar