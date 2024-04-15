import React from "react";
import { cn } from "@/lib/utils";

import { CoinPackageDialog } from "@/components";

export const Header = () => {
  return (
    <header className={cn("fixed top-0 left-0 right-0 ")}>
      <div
        className={cn(
          "relative flex py-4 border-2 border-b-slate-200 backdrop-blur-md h-16"
        )}
      >
        <h2 className={cn("absolute left-6 font-bold text-lg")}>
          Coin package challenge
        </h2>

        <div className={cn("absolute right-6 flex item-center gap-4")}>
          <CoinPackageDialog />
        </div>
      </div>
    </header>
  );
};
