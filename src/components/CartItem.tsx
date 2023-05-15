import React, { useState } from "react";
import Image from "next/image";
import { Item } from "../..";

interface IProps {
  item: Item;
  deleteItem: (item: Item) => void;
  changeTotal: (price: number) => void;
}
const CartItem = ({ item, deleteItem, changeTotal }: IProps) => {
  const [count, setCount] = useState(1);

  const inc = () => {
    setCount((prev) => prev + 1);
    const total = localStorage.getItem("total");
    localStorage.setItem(
      "total",
      JSON.stringify(total ? +total + item.price : item.price)
    );
    changeTotal(total ? +total + item.price : item.price);
  };

  const dec = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : 1));
    const total = localStorage.getItem("total");

    count > 1 && changeTotal(total ? +total - item.price : item.price);
    localStorage.setItem(
      "total",
      JSON.stringify(total ? +total - item.price : item.price)
    );
  };
  return (
    <div className="flex flex-col bg-white rounded-[30px] p-[18px] min-w-[630px]">
      <div className="flex items-center relative gap-5">
        <div
          onClick={() => deleteItem(item)}
          className=" absolute top-0 right-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="17"
            fill="none"
            viewBox="0 0 21 17"
          >
            <path
              fill="#DF6464"
              d="M15.885 3.4h4.982v1.7h-1.993v11.05a.792.792 0 0 1-.292.601 1.09 1.09 0 0 1-.704.249H3.928a1.09 1.09 0 0 1-.704-.249.792.792 0 0 1-.292-.601V5.1H.939V3.4h4.982V.85c0-.225.105-.442.292-.601C6.4.089 6.653 0 6.917 0h7.971c.265 0 .518.09.705.249.187.16.292.376.292.601V3.4Zm.996 1.7H4.925v10.2H16.88V5.1Zm-4.57 5.1 1.762 1.503-1.409 1.202-1.761-1.503-1.762 1.503-1.409-1.202L9.494 10.2 7.732 8.697l1.41-1.202 1.76 1.503 1.763-1.503 1.408 1.202-1.761 1.503ZM7.915 1.7v1.7h5.978V1.7H7.914Z"
            />
          </svg>
        </div>
        <Image src={item.img} width={150} height={150} alt={item.title} />

        <div className="flex flex-col gap-[12px]">
          <span className="text-[#1C1C27] font-bold text-[17px]">
            {item.title}
          </span>

          <span className="font-semibold text-[15px] text-[#AAAAAA]">
            {item.price} ₽
          </span>
        </div>
      </div>
      <div className="w-full flex justify-between mt-3">
        <div className="flex gap-5 items-center">
          <div
            onClick={dec}
            className="bg-[#FFCE7F] cursor-pointer rounded-full w-[30px] h-[30px] flex justify-center items-center text-lg font-bold"
          >
            <span>-</span>
          </div>
          <span className="text-lg font-bold">{count}</span>
          <div
            onClick={inc}
            className="bg-[#FFCE7F] cursor-pointer rounded-full w-[30px] h-[30px] flex justify-center items-center text-lg font-bold"
          >
            <span>+</span>
          </div>
        </div>

        <span className="font-semibold tex-[#1C1C27] text-lg">
          {item.price} ₽
        </span>
      </div>
    </div>
  );
};

export default CartItem;
