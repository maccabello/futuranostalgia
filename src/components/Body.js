import Button from 'react-bootstrap/Button'
import { Container } from "react-bootstrap"
import ItemListContainer from './ItemListContainer'

const Body = () => {

    return (
        <>
        <Container>
            <body id="cuerpo">
                <h1>Futura Nostalgia</h1>
                <p>Celebramos lo viejo y lo nuevo de la música</p>
                <Button>Remeras</Button>
                <Button>Buzos</Button>
                <Button>Camperas</Button>
                <Button>Borrar filtros</Button>
                <ItemListContainer nombre="Mick" apellido="Jagger"/>
                </body>
                </Container>
        </>
    )
}

export default Body
