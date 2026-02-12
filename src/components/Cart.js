import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  // Subscribe the specific store
  // instead of writing code like below use the new code
  // const store = useSelector(store)
  // const cartItem = store.cart.items
  // this above method is not efficient way of subscribing the store. Plese do not use this.

  // Use the below one in which you are subscribing to the specific store like store.cart.items
  const cartItems = useSelector((store) => store.cart.items);
  console.log("Added cart items==", cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="m-2 p-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
