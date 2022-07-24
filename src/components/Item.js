import React, {useState} from "react";

function Item({ name, category }) {

const [isInCart, setIsInCart] = useState(false)

// const addedToCart = "is in cart" ? "Remove From Cart" : "Add to Cart"
  
function handleShoppingCart() {
  // console.log("got clicked")
  setIsInCart((isInCart) => !isInCart)
  
}

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart ? "Remove" : "Add"} onClick={handleShoppingCart}>
        {isInCart ? "Remove From" : "Add To"} Cart
      </button>
    </li>
  );
}

export default Item;
