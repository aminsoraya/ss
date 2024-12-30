import React from "react";
import { LuShoppingCart } from "react-icons/lu";

function Cart() {
  return (
    <div className="flex items-center gap-2 text-gray-50">
      <LuShoppingCart className="text-2xl"/>
      <span className="text-sm">سبد خرید</span>
    </div>
  );
}

export default Cart;
