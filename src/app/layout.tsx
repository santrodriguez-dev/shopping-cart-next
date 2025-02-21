import type { Metadata } from "next";
import "./globals.css"
import { NavBar, Sidebar } from "@/components";
import { CartProvider } from "@/store/cart-store";

export const metadata: Metadata = {
  title: 'Shop Store',
  description: "One Stop Shop – Everything You Need, All in One Place!",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-900 h-screen flex flex-col">
        <CartProvider>
          <NavBar />
          <Sidebar />
          <main className="flex-1 flex flex-col items-center">
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
