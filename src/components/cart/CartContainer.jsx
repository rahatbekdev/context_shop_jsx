
import { useCart } from "../../context/CartContext";
import "./cartContainer.css";
import Items from "./Items";
import Summary from "./Summary";

const CartContainer = () => {
  const { cartItems, removeFromCart, addToCart, removeQuantity } = useCart();

  // add-to cart
  const handleAdd = (product) => {
    addToCart(product);
  };
  //remove cart
  const handleRemove = (productId) => {
    removeFromCart(productId);
  };
  //remove quantity

  const handleRemoveQuantity = (productId) => {
    removeQuantity(productId);
  };

  return (
    <div className="cart-wrapper">
      <h2 className="section-title">Shopping Cart</h2>
      <div className="cart-container">
        {cartItems && cartItems.length > 0 ? (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <Items
                  key={item.id}
                  item={item}
                  handleRemove={handleRemove}
                  handleAdd={handleAdd}
                  handleRemoveQuantity={handleRemoveQuantity}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="no-item">
            <p>No item in the cart</p>
          </div>
        )}
        <Summary cartItems={cartItems} />
      </div>
    </div>
  );
};

export default CartContainer;
