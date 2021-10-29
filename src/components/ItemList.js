import { useEffect, useState } from "react";
import Item from "./Item"

const ItemList = () => {
    const [Productos, setProductos] = useState([]);
    useEffect(() => {
    setTimeout(() => {
    setProductos([
        { id: 1, title: "Harry Styles", description: "buzo", precio: "$4000", img: "http://placehold.it/100x100", stock: 18},
        { id: 2, title: "David Bowie", description: "remera", precio: "$2500", img: "http://placehold.it/100x100", stock: 13}
    ]);
    }, 2000);
    }, []);

    if (Productos.length === 0) {
    return <p>Cargando</p>;
    } else {
    return (
        <div>
        <h1>Productos</h1>
        {Productos.map((e,i)=>{
            return (
            <>
                <p key={e.id}>{e.title}  {e.description} {e.precio} {e.stock}</p>
                <img key={i.id} alt='img' src={e.img}/>
                <Item/>
            </>
            );
        })}
        </div>
    );
    }
}

export default ItemList