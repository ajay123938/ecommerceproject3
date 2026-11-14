
import type { Metadata } from "next";
import Navbar from "./component/Navbar";

export const metadata: Metadata = {
  title: "Everyday Goods",
  description: "My Next.js application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
