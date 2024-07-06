import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react";
import Nav from "@/components/Nav/Nav.component";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shinyui XYZ",
  description: "在這裡你能找到不同有關交易的資訊及免費課程的分享",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className={inter.className}>
        <NextUIProvider>
          <main className="purple-dark text-foreground bg-background p-[16px]">
            <div className="min-h-screen">{children}</div>
            <Nav />
            <footer className="text-center">
              <p>Made love by Shinyui Chu ❤️</p>
            </footer>
          </main>
        </NextUIProvider>
      </body>
    </html>
  );
}
