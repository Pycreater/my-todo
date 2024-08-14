import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import Header from "@/app/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo TournaMax - 1",
  description: "First assignment for tournamax by pratik yadav",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-screen">
          <div className="flex items-center justify-center mt-4">
            <Header title={"Tournamax Assignment"} />
          </div>
          <div className="flex flex-col items-center justify-center mt-10 gap-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
