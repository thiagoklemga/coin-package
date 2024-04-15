"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useUserCoinBalance } from "@/zustand/useUserCoinBalance";

import { CircleDollarSign } from "lucide-react";
import { formatNumber } from "@/formatters/formatNumber";

export const CoinBalance = () => {
  const { goldCoins, silverCoins } = useUserCoinBalance();

  const [balanceSelected, setBalanceSelected] = React.useState<
    "gold" | "silver"
  >("gold");

  const BalanceButton = (props: { type: "gold" | "silver" }) => (
    <button
      onClick={() => setBalanceSelected(props.type)}
      className={cn(
        "rounded-full flex flex-col items-center gap-1 px-4 py-2 text-white w-40",
        balanceSelected === props.type && "bg-[#642FE2]"
      )}
    >
      <span
        className={cn(
          "hidden font-bold",
          balanceSelected === props.type && "block"
        )}
      >
        {props.type === "gold" ? "Golden" : "Silver"} coins
      </span>
      <div className={cn("flex gap-2")}>
        <CircleDollarSign color={props.type} />
        {formatNumber(props.type === "gold" ? goldCoins : silverCoins)}
      </div>
    </button>
  );

  return (
    <section className={cn("flex flex-col gap-8 items-center")}>
      <h1 className={cn("text-white font-bold text-2xl")}>Coin Balance</h1>

      <div
        className={cn(
          "rounded-full items-center justify-between border-2 flex p-1 gap-2 border-[#642fe2]"
        )}
      >
        <BalanceButton type="gold" />

        <BalanceButton type="silver" />
      </div>
    </section>
  );
};
