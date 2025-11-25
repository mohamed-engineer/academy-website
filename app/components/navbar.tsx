"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-blue-600 text-white px-8 py-4 flex justify-between items-center shadow-lg"
    >
      <h1 className="text-2xl font-bold tracking-wide">EduPlatform</h1>

      <ul className="flex gap-8 text-lg">
        <Link href="/" className="hover:text-gray-200 transition">الرئيسية</Link>
        <Link href="/courses" className="hover:text-gray-200 transition">الكورسات</Link>
      </ul>
    </motion.nav>
  );
}
