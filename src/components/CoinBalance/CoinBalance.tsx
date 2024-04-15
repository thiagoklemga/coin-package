"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useUserCoinBalance } from "@/zustand/useUserCoinBalance";

import { CircleDollarSign } from "lucide-react";
import { formatNumber } from "@/formatters/formatNumber";

export const CoinBalance = () => {
  const { goldCoins, silverCoins } = useUserCoinBalance();

  return (
    <div className={cn("rounded-full border-2 flex p-1 gap-2")}>
      <div
        className={cn(
          "rounded-full flex items-center gap-2 px-4 py-2 text-slate-300",
          goldCoins && "text-slate-500"
        )}
      >
        <CircleDollarSign color="gold" />
        {formatNumber(goldCoins)}
      </div>

      <div
        className={cn(
          "rounded-full flex items-center gap-2 px-4 py-2 text-slate-300",
          silverCoins && "text-slate-500"
        )}
      >
        <CircleDollarSign color="silver" />
        {formatNumber(silverCoins)}
      </div>
    </div>
  );
};
