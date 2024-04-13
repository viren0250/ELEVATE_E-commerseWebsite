import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  // console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div className="max-w-[1200px] mx-auto flex justify-center gap-10">
          <div className="w-[100%] md:w-[60%] flex flex-col p-2">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="flex flex-col mt-5">
            <div className="flex flex-col gap-5 h-full p-5">
              <div className="font-semibold text-xl text-green-800">
                Your Cart
              </div>
              <div className="text-green-700 font-semibold text-5xl -mt-2">
                Summary
              </div>
              <p className="text-xl">
                <span className="text-gray-700 font-semibold">
                  Total Items: {cart.length}
                </span>
              </p>
            </div>

            <div className="flex flex-col">
              <p className="text-xl font-bold">
                <span className="font-semibold text-gray-700">Total Amount:</span>${totalAmount}
              </p>
              <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 text-xl border-2 border-green-600 p-3 hover:text-green-700 font-bold mb-5">Checkout Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-700 font-semibold text-xl mb-2">Your cart is Empty.</h1>
          <NavLink to={"/"}>
            <button className="bg-green-600 p-3 px-10 rounded-lg hover:bg-purple-50 font-semibold uppercase text-white hover:text-green-700 transition duration-300 ease-linear border-2 border-green-600 mt-5 tracking-wider">Shop Now</button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
