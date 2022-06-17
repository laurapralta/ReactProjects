import React from 'react'
import { ListadoContainer } from '../styles/styles';
import data from './data.json';
import Item from './Item';

const Listado = ({aumentarTotal}) => {
  return (
    <ListadoContainer>
        {
            data.map(item => (
                <Item key={item.id} aumentarTotal={aumentarTotal} nombre={item.producto.nombre} descripcion={item.producto.descripcion} precio={item.producto.precio} img={item.producto.img} itemStock={item.stock} />
            ))
        }
    </ListadoContainer>
  )
}

export default Listado;
