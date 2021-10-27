import {useState} from "react"

const ItemCount = () => {

    //let contador = 0;
    const [contador,setContador] = useState(0)
    const sumarContador = () => {
        setContador(contador + 1)

    }
    const restarContador = () => {
        setContador(contador - 1)

    }

    return (
        <>
        <div className="card">
        <p>Número de productos: {contador}</p>
        <button onClick={sumarContador}>Agregar</button>
        <button onClick={restarContador}>Restar</button>
        </div>
        </>
    )
}

export default ItemCount
