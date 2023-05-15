import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Image from "next/image";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });
import { Item } from "../..";
import CartItem from "@/components/CartItem";

const Cart = () => {
  const [cart, setCart] = useState<Item[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (typeof window != "undefined") {
      const storage = localStorage.getItem("cart");
      if (storage) {
        setCart(() => [...JSON.parse(storage)]);
        let acc = 0;
        [...JSON.parse(storage)].forEach((item: Item) => {
          acc = acc + item.price;
        });
        setTotal(acc);
        localStorage.setItem("total", acc.toString());
      }
    }
  }, []);

  const deleteItem = (item: Item) => {
    setCart((prev) => prev.filter((value) => value !== item));
    setTotal((prev) => prev - item.price);
    localStorage.setItem(
      "cart",
      JSON.stringify(cart.filter((value) => value !== item))
    );
  };

  return (
    <div className={`max-w-6xl flex flex-col mx-auto ${montserrat.className}`}>
      <Header cartCount={cart.length} />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="w-full flex flex-col justify-between ">
          <h3 className="text-[#1C1C27] font-semibold text-xl">Корзина</h3>
          <div className="flex justify-between gap-5">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-5">
                {cart.length > 0
                  ? cart.map((item, idx) => (
                      <CartItem
                        key={item.title + idx}
                        item={item}
                        deleteItem={deleteItem}
                        changeTotal={setTotal}
                      />
                    ))
                  : "Корзина пуста"}
              </div>
            </div>

            <div className="flex flex-col bg-white min-w-[350px] h-fit rounded-[30px]">
              <div className="flex items-center justify-between  text-black font-semibold text-[15px] p-5">
                <span className=" uppercase">итого</span>
                <span>₽ {total}</span>
              </div>
              <button className="bg-black text-white text-[17px] font-semibold p-5 rounded-[30px]">
                Перейти к оформлению
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
