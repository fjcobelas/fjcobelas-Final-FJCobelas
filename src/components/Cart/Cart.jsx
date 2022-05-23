import { useContext } from "react"
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {

  const {cart, clear,getTotal} = useContext(CartContext)

  return (
    <div className="container my-5">
    <h1>Tu Compra...</h1>
    <hr />
    {      
         cart.length !== 0 ?
        (
          <div className=''>
            <div className=''>
              {cart.map((e) => <CartItem key={e.id} item={e} />)}
              <br/>
              <h3>TOTAL: ${getTotal(cart)}</h3>
              <br/>
              <button className="btn btn-danger" onClick={clear}>Vaciar Carrito</button>
              <br />
              <br />
                <Link to='/checkout'>
                  <button className="btn btn-info">Finalizar Compra</button>
                </Link>
            </div>
          </div>
        ) : (
          <div>
            <h3>El carrito esta vacio</h3>
            <Link className="btn btn-danger" to='/'>Ir a la tienda</Link>
          </div>
        )
    }
    
  </div>
  )

}

export default Cart