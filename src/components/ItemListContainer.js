import ItemCount from "./itemCount"
import ItemList from "./ItemList"

const ItemListContainer = ({nombre,apellido}) => {

    return (
        <>
        <p>Bienvenido {nombre} {apellido}</p>
        <ItemList/>
        <ItemCount/>
        </>
    )
}

export default ItemListContainer
