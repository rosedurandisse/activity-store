import React from "react";

function Basket(props) {
  const { cartItems } = props;
  return (
    <aside className="col-1">
      <h2>Cart Items</h2>
      <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
      {cartItems.map((eachItem) => {
        return (
          <div key={eachItem.id}>
            {eachItem.name}
            <div>{eachItem.quantity}</div>
          </div>
        );
      })}
    </aside>
  );
}

export default Basket;
