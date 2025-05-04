import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rwanda Jobs - Find Your Next Career Opportunity",
  description: "Discover the latest job opportunities across Rwanda.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 min-h-screen`}>
        <Navbar />
        <main className="container mx-auto px-4 py-8">{children}</main>
        <footer className="bg-white border-t mt-auto py-6">
          <div className="container mx-auto px-4 text-center text-gray-500">
            &copy; {new Date().getFullYear()} Rwanda Jobs. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
