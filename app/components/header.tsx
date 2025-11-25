"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-md bg-[#0d0f12]/70
        border-b border-gray-700
        text-white
        mt-10
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold tracking-wide text-blue-400"
        >
          EduPlatform
        </motion.h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-lg">
          <Link
            href="/"
            className="hover:text-blue-400 transition"
          >
            الرئيسية
          </Link>

          <Link
            href="/courses"
            className="hover:text-blue-400 transition"
          >
            الكورسات
          </Link>

          <Link
            href="#teachers"
            className="hover:text-blue-400 transition"
          >
            المدرسين
          </Link>
        </nav>

        {/* CTA Button */}
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="/courses"
          className="
            hidden md:block
            bg-blue-500 hover:bg-blue-600
            text-white px-6 py-2 rounded-xl
            transition shadow-md
          "
        >
          ابدأ التعلم
        </motion.a>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          <FiMenu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col px-6 py-4 bg-[#0d0f12]/95 border-t border-gray-700"
        >
          <Link
            href="/"
            className="py-3 text-lg hover:text-blue-400 transition"
          >
            الرئيسية
          </Link>

          <Link
            href="/courses"
            className="py-3 text-lg hover:text-blue-400 transition"
          >
            الكورسات
          </Link>

          <Link
            href="#teachers"
            className="py-3 text-lg hover:text-blue-400 transition"
          >
            المدرسين
          </Link>

          <a
            href="/courses"
            className="
              mt-4 bg-blue-500 hover:bg-blue-600
              text-white text-center py-2 rounded-xl
              transition shadow-md
            "
          >
            ابدأ الآن
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
