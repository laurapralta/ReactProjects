import React from 'react'
import { CabeceraContainer } from '../styles/styles'

const Cabecera = ({productos}) => {
    return (
        <CabeceraContainer>
            <h1>Carrito de compras</h1>
            <p>Cantidad de productos: <span>{productos}</span></p> 
        </CabeceraContainer>
    )
}

export default Cabecera;