"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white shadow-md py-4 px-10 flex justify-between items-center sticky top-0 z-50"
    >
      <h1 className="text-2xl font-bold text-blue-600">EduPlatform</h1>

      <nav className="flex gap-6 text-lg">
        <Link href="/" className="hover:text-blue-600 transition">الرئيسية</Link>
        <Link href="/courses" className="hover:text-blue-600 transition">الكورسات</Link>
      </nav>
    </motion.header>
  );
}
