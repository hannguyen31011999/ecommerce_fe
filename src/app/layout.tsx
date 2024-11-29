import { METADATA } from "@/constants/constants";
import type { Metadata } from "next";
import "@/assets/css/style.css";

export const metadata: Metadata = { ...METADATA };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="app">{children}</body>
    </html>
  );
}
