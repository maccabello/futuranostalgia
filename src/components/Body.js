import Button from 'react-bootstrap/Button'
import { Container } from "react-bootstrap"
import ItemListContainer from './ItemListContainer'
import logo from "../imagenes/Signo.png";

const Body = () => {
    return (
        <>
        <Container fluid>
            <div id="cuerpo">
            <img src={logo} alt="Logo" height="200px"/>
                <p>Celebramos lo viejo y lo nuevo de la música</p>
                <Button>Remeras</Button>
                <Button>Buzos</Button>
                <Button>Camperas</Button>
                <Button>Borrar filtros</Button>
                <ItemListContainer nombre="Mick" apellido="Jagger"/>
                </div>
                </Container>
        </>
    )
}

export default Body
