import ItemCount from "./itemCount"

const ItemListContainer = ({nombre,apellido}) => {

    return (
        <>
        <p>Bienvenido {nombre} {apellido}</p>
        <ItemCount/>
        </>
    )
}

export default ItemListContainer
