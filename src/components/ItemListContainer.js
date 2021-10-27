import {useState} from "react"

const ItemListContainer = ({nombre,apellido}) => {

    //let contador = 0;
    const [contador,setContador] = useState(0)
    const sumarContador = () => {
        setContador(contador + 1)

    }

    return (
        <>
        <p>Bienvenido {nombre} {apellido}</p>
        <div className="card">
        <p>Número de productos: {contador}</p>
        <button onClick={sumarContador}>Agregar</button>
        </div>
        </>
    )
}

export default ItemListContainer
