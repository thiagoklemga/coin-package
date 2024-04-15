import { cn } from "@/lib/utils";

import { CoinBalance, CoinPackageList } from "@/components";

export default function Home() {
  return (
    <main
      className={cn("flex bg-[#090B2A] justify-center gap-12 pt-16 h-screen")}
    >
      <CoinBalance />

      <CoinPackageList />
    </main>
  );
}
