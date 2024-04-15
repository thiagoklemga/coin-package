import React from "react";
import { cn } from "@/lib/utils";

import { CoinPackageOption, ICoinPackageOptions } from "@/components";

export const CoinPackageList = () => {
  return (
    <section className={cn("w-1/2 flex flex-col gap-8")}>
      <h1 className={cn("text-white font-bold text-2xl")}>
        Select Coin Package
      </h1>

      <div className={cn("flex flex-col gap-4")}>
        {options.map((option, index) => (
          <CoinPackageOption key={index} {...option} />
        ))}
      </div>
    </section>
  );
};

const options: ICoinPackageOptions[] = [
  {
    goldCoins: 10,
    silverCoins: 100,
    price: 10,
  },
  {
    goldCoins: 100,
    silverCoins: 1000,
    price: 90,
  },
  {
    goldCoins: 500,
    silverCoins: 5000,
    price: 450,
  },
];
