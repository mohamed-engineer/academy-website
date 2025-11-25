import "./globals.css";
import Navbar from "./components/navbar";
import { ReactNode } from "react";

export const metadata = {
  title: "EduPlatform",
  description: "منصة تعليمية بسيطة مبنية بـ Next.js"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-gray-100">
        <Navbar />
        <main className="container mx-auto py-8 px-4">{children}</main>
      </body>
    </html>
  );
}
