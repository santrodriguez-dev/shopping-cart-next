import { NavBar } from "@/components/NavBar";
import { ProductList } from "@/components/ProductList";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900">
      <NavBar />
      <ProductList />
    </main>
  );
}
