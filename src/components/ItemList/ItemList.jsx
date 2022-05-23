import React from 'react';
import Item from '../Item/Item'

const ItemList = ({ data }) => {
    return (
        <div className='container'>
            <div className='row justify-content-evenly'>
                {data.map((i) => (<Item item={i} name={i.nombre} key={i.id} id={i.id} image={i.img} price={i.precio}/>))}
            </div>
        </div>
    )
}

export default ItemList