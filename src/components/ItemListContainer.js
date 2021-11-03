import ItemList from "./ItemList"
import ItemCount from "./itemCount"
import ItemDetailContainer from "./ItemDetailContainer"

const ItemListContainer = ({nombre,apellido}) => {

    return (
        <>
        <p>Bienvenido {nombre} {apellido}</p>
        <ItemList/>
        <ItemCount/>
        <ItemDetailContainer/>
        </>
    )
}

export default ItemListContainer
