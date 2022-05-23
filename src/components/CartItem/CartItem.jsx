import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';

const CartItem = ({item}) => {
 

    const {removeItem} = useContext(CartContext)
 
    return (
        <>
            <div className='card mb-3' style={{maxWidth: '540px'}}>
                <div className='row g-0'>
                    <div className='col-md-4'>
                        <img src={item.img} className='img-fluid rounded-start' alt={item.nombre}/>
                    </div>
                    <div className='col-md-8'>
                        <div className='card-body'>
                            <h5 className='card-title'>{item.nombre}</h5>
                            <p className='card-text'>Cantidad: {item.amount}</p>
                            <p className='card-text'>Precio unitario: {item.precio}</p>
                            <p className='card-text'>Precio: {item.precio * item.amount}</p>
                            <button className='btn btn-warning' onClick={()=>removeItem(item.id)}>Eliminar Producto</button>
                        </div>

                    </div>
                </div>
            </div>
               
        </>
    )
}

export default CartItem