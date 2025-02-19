import { NavBar } from "@/components/NavBar";
import { ProductList } from "@/components/ProductList";

export default function Home() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900">
      <NavBar />
      <ProductList />
    </main>
  );
}
