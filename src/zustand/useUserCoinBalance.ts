import { create } from "zustand";

type LayoutState = {
  goldCoins: number;
  setGoldCoins: (increment: number) => void;
  silverCoins: number;
  setSilverCoins: (increment: number) => void;
};

export const useUserCoinBalance = create<LayoutState>((set) => ({
  goldCoins: 0,
  setGoldCoins: (increment) =>
    set((state) => ({ goldCoins: state.goldCoins + increment })),
  silverCoins: 0,
  setSilverCoins: (increment) =>
    set((state) => ({ silverCoins: state.silverCoins + increment })),
}));
