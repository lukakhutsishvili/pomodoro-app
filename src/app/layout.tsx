import type { Metadata } from "next";

import "./globals.css";



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
        className={` bg-bgColor`}
      >
        {children}
      </body>
    </html>
  );
}
