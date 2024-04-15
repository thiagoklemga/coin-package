"use client";

import { cn } from "@/lib/utils";
import { formatNumber } from "@/formatters/formatNumber";

import { CoinPackageConfirmDialog } from "@/components";
import { CircleDollarSign } from "lucide-react";

export interface ICoinPackageOptions {
  goldCoins: number;
  silverCoins: number;
  price: number;
}

export const CoinPackageOption = ({
  goldCoins,
  silverCoins,
  price,
}: ICoinPackageOptions) => {
  return (
    <div
      className={cn(
        "border-2 border-text-slate-500 p-4 rounded-2xl flex items-center"
      )}
    >
      <h3 className={cn("flex items-center text-slate-500 gap-1 w-1/3")}>
        <CircleDollarSign color="gold" />
        {formatNumber(goldCoins)}
      </h3>

      <h3 className={cn("flex items-center text-slate-500 gap-1 w-1/3")}>
        <CircleDollarSign color="silver" />
        {formatNumber(silverCoins)}
      </h3>

      <div className={cn("flex justify-end w-1/3")}>
        <CoinPackageConfirmDialog
          price={price}
          goldCoins={goldCoins}
          silverCoins={silverCoins}
        />
      </div>
    </div>
  );
};
