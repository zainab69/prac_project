import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  loadCart,
  removeFromCart 
} from "../../../Actions/Actions";

const AddtoCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      dispatch(loadCart(JSON.parse(storedCart)));
    }
  }, [dispatch]);

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };

  return (
    <div className="w-80 bg-slate-300 h-lvh absolute inset-y-0 right-0 top-16">
      <h1 className="text-white pl-5 pt-7 text-2xl font-bold">Your Cart</h1>
      <div>
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between p-4">
            <div>
              <img
                className="w-12 h-12 object-cover mb-4 rounded-lg"
                src={item.image}
                alt={item.title}
              />
              <p className="text-white">{item.title}</p>
              <p className="text-white">${item.price}</p>
            </div>
            <div className="flex gap-3 items-center ">
              <button
                className="bg-slate-500 text-white rounded-md w-5 "
                onClick={() => {
                  if (item.quantity === 1) {
                    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
                    localStorage.setItem('cart', JSON.stringify(updatedCart));
                    dispatch(removeFromCart(item.id)); 
                  } else {
                    handleDecreaseQuantity(item.id);
                  }
                }}
              >
                -
              </button>
              <p className="text-white text-lg">{item.quantity}</p>
              <button
                className="bg-slate-500 text-white rounded-md w-5 "
                onClick={() => {
                  dispatch(increaseQuantity(item.id));
                }}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-white pl-5 pt-7 text-2xl font-bold">
        Total: $
        {cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}
      </div>
    </div>
  );
};

export default AddtoCart;
