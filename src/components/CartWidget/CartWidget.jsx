import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import cartLogo from '../../assets/images/cart.png';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
const {getQuantity} = useContext(CartContext)    

  return (<>
      {
      <Link to={"/cart"} style={{ backgroundColor: 'fffff', border: 'none', marginLeft: 16, marginRight: 24 }}>
        <img src={cartLogo} alt="cart" width={45} height={45} />
        {
        getQuantity()>0&&<button style={{ backgroundColor: '#e4c360', border: 'none'}}>{getQuantity()}</button>
        }
      </Link>
      }
  </>
  );
};

export default CartWidget;
