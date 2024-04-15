"use client";

import { cn } from "@/lib/utils";
import { formatNumber } from "@/formatters/formatNumber";

import { CoinPackageConfirmDialog } from "@/components";
import { CircleDollarSign, DollarSign } from "lucide-react";

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
        "border-2 border-[#642FE2] p-4 text-white rounded-2xl flex items-center",
        "text-white font-bold"
      )}
    >
      <h3 className={cn("flex items-center gap-1 w-1/3")}>
        <CircleDollarSign color="gold" />
        {formatNumber(goldCoins)}
      </h3>

      <h3 className={cn("flex items-center gap-1 w-1/3")}>
        <CircleDollarSign color="silver" />
        {formatNumber(silverCoins)}
      </h3>

      <h3 className={cn("flex items-center gap-1 w-1/3")}>
        <DollarSign />
        {formatNumber(price)}
      </h3>

      <div className={cn("")}>
        <CoinPackageConfirmDialog
          price={price}
          goldCoins={goldCoins}
          silverCoins={silverCoins}
        />
      </div>
    </div>
  );
};
