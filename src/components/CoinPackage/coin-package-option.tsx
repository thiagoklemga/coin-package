import { cn } from "@/lib/utils";
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
        "border-2 border-pink-400 p-4 rounded-2xl flex items-center"
      )}
    >
      <h3 className={cn("flex items-center gap-1 w-1/3")}>
        <CircleDollarSign color="gold" />
        {goldCoins}
      </h3>

      <h3 className={cn("flex items-center gap-1 w-1/3")}>
        <CircleDollarSign color="silver" />
        {silverCoins}
      </h3>

      <div className={cn("flex justify-end w-1/3")}>
        <button
          className={cn(
            "h-8 rounded-full bg-pink-500 text-white font-semibold text-lg px-4 py-2 flex items-center gap-1 "
          )}
        >
          <DollarSign />
          {price}
        </button>
      </div>
    </div>
  );
};
