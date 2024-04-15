import React from "react";
import { cn } from "@/lib/utils";
import { useUserCoinBalance } from "@/zustand/useUserCoinBalance";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ICoinPackageOptions } from "@/components";
import { toast } from "../ui/toast/use-toast";

export const CoinPackageConfirmDialog = ({
  goldCoins,
  silverCoins,
  price,
}: ICoinPackageOptions) => {
  const { setGoldCoins, setSilverCoins } = useUserCoinBalance();

  async function onBuyCoins() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setGoldCoins(goldCoins);
    setSilverCoins(silverCoins);
    toast({ title: "Coins bought successfully" });
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger
        className={cn(
          "h-8 rounded-full bg-[#F538B5] text-white font-semibold text-lg px-4 py-2 flex items-center gap-1 "
        )}
      >
        BUY
      </AlertDialogTrigger>

      <AlertDialogContent
        className={cn("w-[320px] border-4 border-[#642FE2] text-[#642FE2]")}
      >
        <AlertDialogHeader>
          <AlertDialogTitle>Do you confirm the buy?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone... or maybe it can
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onBuyCoins}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
