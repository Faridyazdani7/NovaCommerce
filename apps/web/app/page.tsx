import { Button } from "@novacommerce/ui";
import { formatPrice } from "@novacommerce/utils";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center flex-col gap-6">
      <Button />
      <p>{formatPrice(199)}</p>
    </main>
  );
}
