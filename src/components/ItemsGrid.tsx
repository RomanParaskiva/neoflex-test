import React from "react";
import Image from "next/image";
import { Item } from "../..";

interface IProps {
  title: string;
  items: Item[];
  addToCart: (item: Item) => void;
}

const ItemsGrid = ({ title, items, addToCart }: IProps) => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <h3 className="text-[#838383] text-xl font-semibold">{title}</h3>

      <div className="grid grid-cols-3 gap-[30px] mb-10">
        {items.map((item, idx) => (
          <div
            key={item.title + idx}
            className="w-full max-w-[350px] h-full flex flex-col gap-5 pt-3 pb-[30px] px-5 bg-white rounded-[30px] shadow-[0px_0px_20px_rgba(0, 0, 0, 0.1)] items-center justify-center"
          >
            <div className="flex justify-center items-center object-contain h-full">
              <Image className=" h-auto" src={item.img} width="220" height="230" alt={item.title} priority />
            </div>
            <div className="w-full flex justify-between mb-1">
              <span className="font-semibold text-[#1C1C27] text-[17px]">
                {item.title}
              </span>

              <div className="flex flex-col text-[#FFA542] relative">
                <span className="font-semibold text-[17px]">
                  {item.price} ₽
                </span>
                {item?.oldPrice ? (
                  <span className="text-[#FFCE7F] text-[13px] line-through absolute bottom-[-70%] right-0">
                    {item.oldPrice} ₽
                  </span>
                ) : null}
              </div>
            </div>

            <div className="w-full flex justify-between">
              <div className="flex gap-[10px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="23"
                  fill="none"
                  viewBox="0 0 25 23"
                >
                  <path
                    fill="#FFCE7F"
                    d="m12.627 18.014-7.21 4.352 1.96-8.121L.96 8.815l8.421-.667L12.627.44l3.244 7.708 8.423.667-6.417 5.43 1.96 8.12-7.21-4.35Z"
                  />
                </svg>
                <span className="text-[#838383] text-[17px] font-semibold">
                  {item.rate}
                </span>
              </div>

              <button onClick={() => addToCart(item)} className="text-black text-[17px] font-semibold">Купить</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsGrid;
