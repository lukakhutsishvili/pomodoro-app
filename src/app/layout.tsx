import type { Metadata } from "next";
import { Kumbh_Sans, Roboto_Slab, Space_Mono } from "next/font/google";
import "./globals.css";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"], weight: "700" });
const robotoSlab = Roboto_Slab({ subsets: ["latin"], weight: "400" });
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: "Pomodoro App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kumbhSans.className} ${robotoSlab.className} ${spaceMono.className} bg-bgColor`}
      >
        {children}
      </body>
    </html>
  );
}
