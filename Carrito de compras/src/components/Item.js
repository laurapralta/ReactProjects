import React, {useState} from 'react';
import { ItemContainer, ProductButton } from '../styles/styles';

const Item = ({aumentarTotal, img, nombre, descripcion, itemStock}) => {
    const [stock, setStock] = useState(itemStock);

    const comprar = () => {
        setStock(stock - 1);
        aumentarTotal();
    }

    console.log(img)

    return (
        <ItemContainer>
            <img src={img} alt='img' />
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <h5>En stock: <span>{stock < 1 ? "Agotado" : stock }</span></h5>
            <ProductButton disabled={stock < 1} onClick={() => {comprar();}}>
                {stock <= 0 ? "Sin Stock" : "Comprar"}
            </ProductButton>
        </ItemContainer>
    )
}

export default Item;