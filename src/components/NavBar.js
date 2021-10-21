import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'

const Navbar = () => {
    return(
        <>
        <Nav id="navbar">
            <h1>FN</h1>
            <a href="index.html">Home</a>
            <a href="#!">Sobre nosotrxs</a>
        </Nav>
        <header id="main-header">
                <h1>Futura Nostalgia</h1>
                    <p>Celebramos lo viejo y lo nuevo de la música</p>
                    <Button>Remeras</Button>
                    <Button>Buzos</Button>
                    <Button>Camperas</Button>
                <Button>Borrar filtros</Button>
        </header>
        </>
    )
}
export default Navbar