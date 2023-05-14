import React from "react";
import BasketIcon from "./BasketIcon";
import FavoriteIcon from "./FavoriteIcon";
import { useRouter } from "next/router";

const Header = ({ cartCount }: { cartCount: number }) => {
  const router = useRouter()
  return (
    <div className="w-full flex justify-between py-4 px-1">
      <span onClick={() => router.push("/")} className="font-bold text-2xl text-[#101010]">QPICK</span>

      <div className="flex">
        <FavoriteIcon favorites={2} />
        <div onClick={() => router.push("/Cart")}><BasketIcon items={cartCount} /></div>
      </div>
    </div>
  );
};

export default Header;
