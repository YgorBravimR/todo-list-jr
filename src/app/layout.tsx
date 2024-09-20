import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "../styles/globals.scss";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Ygor Bravim | Test",
  description: "This is a front end junior developer test",
};

const font = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font.className}>
      <body>
        <div id="modal-root" />
        <Header />
        {children}
      </body>
    </html>
  );
}
