import products_Json from "./products.json"
import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemDetail = ({contador}) => {
const [productoss, setProductos] = useState([])
useEffect(() => {
    promesa
    .then ((data_json)=>{
        setTimeout(()=>{
            setProductos(data_json)
        },2000)
    })
    .catch(()=>{
        console.log("Error")
    })
},[])
const promesa= new Promise((resolve, reject) => {
    resolve(products_Json)
    reject("Error")
})
return (
    <div>
        {productoss.lenght===0?<p>Cargando...</p>:<ItemList items={productoss}/>}
    </div>
)
}

export default ItemDetail

