import { cn } from "@/lib/utils";

import { CoinBalance, CoinPackageDialog } from "@/components";

export default function Home() {
  return (
    <main className={cn("flex flex-col gap-4 pt-16 items-center h-screen")}>
      <CoinBalance />

      <CoinPackageDialog />
    </main>
  );
}
