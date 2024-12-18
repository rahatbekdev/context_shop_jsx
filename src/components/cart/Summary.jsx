/* eslint-disable react/prop-types */
const Summary = ({ cartItems }) => {
  //total summary for cart
  const totalAmount = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  //add 2% tax on the totalAmount
  const taxAmount = totalAmount * 0.02;

  //total quantity in the cart
  const totalQuantity = cartItems.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  //Overall price
  const totalAmountWithTax = totalAmount + taxAmount;

  return (
    <div className="cart-summary">
      <h3 className="summary-title">Summary</h3>
      <div className="summary-total">
        <span>Subtotal</span> $ {totalAmount.toFixed(2)}
      </div>

      <div className="summary-total-tax">
        <span>Tax charges (2 %)</span> $ {taxAmount.toFixed(2)}
      </div>

      <div className="summary-total-quantity">
        <span>Total Quantity *</span> {totalQuantity}
      </div>

      <div className="summary-total-amount">
        <span>Total Price Tax</span> $ {totalAmountWithTax.toFixed(2)}
      </div>

      <button className="check-out-btn">Proceed to checkout</button>
    </div>
  );
};

export default Summary;
