import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "My cart 🛒",
  description: "Cart page in next",
};

export default function CartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
