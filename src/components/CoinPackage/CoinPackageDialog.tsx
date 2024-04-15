import React from "react";
import { cn } from "@/lib/utils";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CoinPackageOption, ICoinPackageOptions } from "@/components";

export const CoinPackageDialog = () => {
  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          "rounded-full bg-slate-400 text-white font-semibold text-lg px-4 py-2 flex items-center"
        )}
      >
        Buy coins
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Select the coin package</DialogTitle>
        </DialogHeader>

        <div className={cn("flex items-center text-slate-500")}>
          <h2 className="w-1/3">Gold Coins</h2>
          <h2 className="w-1/3">Silver Coins</h2>
          <h2 className="w-1/3 text-right">Price</h2>
        </div>

        {options.map((option, index) => (
          <CoinPackageOption key={index} {...option} />
        ))}
      </DialogContent>
    </Dialog>
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
