import { Routes, Route } from "react-router-dom";
import { useState } from "react";

//Pages
import Home from "./Pages/Home";
import Edit from "./Pages/Edit";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Basket from "./Components/Basket";

//Nav Components
import NavBar from "./Components/Navbar";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (product) => {
    const itemExistsInCart = cartItems.find((item) => item.id === product.id);
    if (itemExistsInCart) {
      setCartItems(
        cartItems.map((eachItem) =>
          eachItem.id === product.id
            ? { ...itemExistsInCart, quantity: itemExistsInCart.quantity + 1 }
            : eachItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemove = (product) => {
    const itemExistsInCart = cartItems.find((item) => item.id === product.id);

    if (itemExistsInCart.quantity === 1) {
      setCartItems(cartItems.filter((eachItem) => eachItem.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((eachItem) =>
          eachItem.id === product.id
            ? { ...itemExistsInCart, quantity: itemExistsInCart.quantity - 1 }
            : eachItem
        )
      );
    }
  };

  const clearItems = () => {
    setCartItems([]);
  };
  console.log(cartItems);
  return (
    <div>
      <NavBar countCartItems={cartItems.length} />
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/adventures"
            element={
              <Index cartItems={cartItems} handleAddToCart={handleAddToCart} />
            }
          ></Route>
          <Route path="/adventures/:id" element={<Show />}></Route>
          <Route path="/adventures/:id/edit" element={<Edit />}></Route>
          <Route path="/new" element={<New />}></Route>
          <Route
            path="/cart"
            element={
              <Basket
                cartItems={cartItems}
                handleAddToCart={handleAddToCart}
                handleRemove={handleRemove}
                clearItems={clearItems}
              />
            }
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
