import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RideSplit",
  description: "A digital driver's log for people who share a car",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
