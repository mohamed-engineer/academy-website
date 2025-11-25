import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "EduPlatform",
  description: "Landing page educational platform",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-white">{children}</body>
    </html>
  );
}
