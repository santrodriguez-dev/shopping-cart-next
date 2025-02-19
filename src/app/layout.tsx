import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/cart";
import { NavBar } from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="en">
      <body>
        <CartProvider>
          <NavBar />
          <main className="bg-gray-50 dark:bg-gray-900">
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
