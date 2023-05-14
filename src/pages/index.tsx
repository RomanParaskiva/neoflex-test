import { useEffect, useState } from "react";
import Header from "@/components/Header";
import ItemsGrid from "@/components/ItemsGrid";
import { headphones, wirelessHeadphones } from "@/constants";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });
import { Item } from "../..";

export default function Home() {
  const [cart, setCart] = useState<Item[]>([])

  useEffect(() => {
    if (typeof window != "undefined") {
      const storage = localStorage.getItem("cart")

      if(storage) setCart([...JSON.parse(storage)])
    }
  },[])

  const addToCart = (item: Item) => {
    setCart(() => [...cart, item])

    localStorage.setItem("cart", JSON.stringify([...cart, item]))
  }
  return (
    <div className={`max-w-6xl flex flex-col mx-auto ${montserrat.className}`}>
      <Header cartCount={cart.length} />
      <main
        className="flex min-h-screen flex-col items-center justify-between p-24"
      >
        <ItemsGrid addToCart={addToCart} title="Наушники" items={headphones} />

        <ItemsGrid addToCart={addToCart} title="Беспроводные наушники" items={wirelessHeadphones} />
      </main>
    </div>
  );
}
