import React, { useContext } from "react";
import Context from "./CartContext";
import {Link} from "react-router-dom"

const Cart = () => {
  const [cart] = useContext(Context);

  const totalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const totalPrice = () => {
    return cart.reduce((total, item) => {
      const parsedPrice = parseFloat(item.price.replace('€', '').trim());
      return total + parsedPrice * item.quantity;
    }, 0);
  };

  return (
    <div className="cartContainer">
      <Link to="/" className="homeLink">Home</Link>
      <br/><br/><h2 className="cartTitle">Sadržaj košarice</h2><br/><br/>
      <div className="cartItemsContainer">
        {cart.map((item) => (
          <div key={item.id} className="cartItem">
            <div>
              Proizvod: {item.name}
            </div>
            <div>
              Cijena: {item.price}
            </div>
            <div>
              Količina: {item.quantity}
            </div>
          </div>
        ))}
      </div>
      <div className="cartSummary">
        <div>
          <strong>Ukupno proizvoda: {totalQuantity()}</strong>
        </div>
        <div>
        <strong>Ukupna cijena: {totalPrice()} €</strong>
        </div>
      </div>
    </div>
  );
}

export default Cart;